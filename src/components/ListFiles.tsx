import React, { useMemo, useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { QueryResults, FileList, processFiles, File } from "../modules/listFiles";
import FileListing from "./FileListing";
import Fuse from "fuse.js";

import ArrowDown from "../../assets/svg/arrow_down.svg";
import ArrowUp from "../../assets/svg/arrow_up.svg";

function getListOfFiles() {
	const query = graphql`
		{
			allSitePage {
				nodes {
					path
					pageContext
				}
			}
			allFile(filter: { ext: { eq: ".md" } }) {
				nodes {
					id
					name
					fields {
						lastModified
					}
				}
			}
		}
	`;

	const queryRes = useStaticQuery(query) as QueryResults;

	return processFiles(queryRes.allFile, queryRes.allSitePage);
}

export default function ListFiles({ searchInput }: { searchInput?: string }) {
	const fileList = getListOfFiles();

	const searchResult = useMemo(() => {
		fileList.sort((a, b) => a.name.localeCompare(b.name));

		const fuse = new Fuse(fileList, {
			keys: ["name", "category"]
		});
		return searchInput ? fuse.search(searchInput).map((v) => v.item) : fileList;
	} , [searchInput]);

	const [fileNameSort, setFileNameSort] = useState(1);
	if (fileNameSort != 0)
		searchResult.sort(({ name: a }, { name: b }) => fileNameSort * a.localeCompare(b));

	const [lastUpdateSort, setLastUpdateSort] = useState(0);
	if (lastUpdateSort != 0)
		searchResult.sort(({ lastModified: a }, { lastModified: b }) => lastUpdateSort * ((+a) - (+b)));

	return (
		<>
			<div className="flex py-3 flex-row border-b-2 font-semibold select-none">
				<span className="basis-2/5 cursor-pointer flex items-center"
					onClick={(e) => {
						e.stopPropagation();
						setLastUpdateSort(0);
						setFileNameSort(!fileNameSort ? 1 : fileNameSort * -1);
					}}
				>File name
				{fileNameSort < 0 && <ArrowDown className="w-5 inline-block" />}
				{fileNameSort > 0 && <ArrowUp className="w-5 inline-block" />}
				</span>
				<span className="hidden md:flex basis-32 cursor-pointer items-center"
					onClick={((e) => {
						e.stopPropagation();
						setFileNameSort(0);
						setLastUpdateSort(!lastUpdateSort ? 1 : lastUpdateSort * -1);
					})}
				>Last Update
				{lastUpdateSort < 0 && <ArrowDown className="w-5 inline-block" />}
				{lastUpdateSort > 0 && <ArrowUp className="w-5 inline-block" />}
				</span>
				<span className="ml-auto">Subject</span>
			</div>
			<div className="flex flex-1 flex-col pb-3 overflow-y-scroll">
				{searchResult.map((file) => {
					return <FileListing file={file} key={file.id} />;
				})}
			</div>
		</>
	);
}
