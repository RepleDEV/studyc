import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { QueryResults, FileList, processFiles } from "../modules/listFiles";

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
  const fileList = getListOfFiles();
  return (
    <div className="flex flex-1 flex-col pt-3 pl-3 overflow-y-scroll">
      {
        fileList.map((file) => {
          if (searchInput && !file.name.toLowerCase().includes(searchInput.toLowerCase()))return;
          return (
            <Link to={file.path} className="border-b-2">
              {file.name}
            </Link>
          );
        })
      }
    </div>
  );
}