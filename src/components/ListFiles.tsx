import React, { useMemo } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { QueryResults, FileList, processFiles, File } from "../modules/listFiles";
import FileListing from "./FileListing";
import Fuse from "fuse.js";

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


	return (
		<>
			<div className="flex py-3 flex-row border-b-2 font-semibold">
				<span className="basis-2/5">File name</span>
				<span className="hidden md:block basis-32">Last Update</span>
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
