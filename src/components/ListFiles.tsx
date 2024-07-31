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
				}
			}
		}
	`;

	const queryRes = useStaticQuery(query) as QueryResults;

	return processFiles(queryRes.allFile, queryRes.allSitePage);
}

export default function ListFiles({ searchInput }: { searchInput?: string }) {
	const fileList = useMemo(() => {
		return getListOfFiles().sort((a, b) => a.name.localeCompare(b.name));
	} , []);

	const fuse = new Fuse(fileList, {
		keys: ["name", "category"]
	});
	const searchResults = searchInput ? fuse.search(searchInput).map((v) => v.item) : fileList;

	return (
		<div className="flex flex-1 flex-col pt-3 px-3 overflow-y-scroll">
			{searchResults.map((file) => {
				return <FileListing file={file} key={file.id} />;
			})}
		</div>
	);
}
