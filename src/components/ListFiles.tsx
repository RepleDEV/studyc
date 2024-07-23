import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { QueryResults, FileList, processFiles } from "../modules/listFiles";
import FileListing from "./FileListing";

let fileListCache: FileList = [];

function getListOfFiles() {
  if (fileListCache.length) return fileListCache;

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
  fileListCache = processFiles(queryRes.allFile, queryRes.allSitePage);
  return fileListCache;
}

export default function ListFiles({ searchInput }: { searchInput?: string }) {
  let fileList = getListOfFiles();
  fileList = fileList.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-1 flex-col pt-3 px-3 overflow-y-scroll">
      {
        fileList.map((file) => {
          if (searchInput && !file.name.toLowerCase().includes(searchInput.toLowerCase()))return;
          return <FileListing file={file} key={file.id}/>
        })
      }
    </div>
  );
}