import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

interface QueryResults {
  allFile: {
    nodes: {
      id: string;
      name: string;
    }[]; 
  } 
  allSitePage: {
    nodes: {
      path: string;
      pageContext: Partial<{
        id: string
      }>;
    }[];
  }
}

type FileList = {
  name: string;
  path: string;
}[];

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
  const files = [] as FileList;

  // JANK!
  for (const node of queryRes.allFile.nodes) {
    const correspondingPage = queryRes.allSitePage.nodes.find((page) => page.pageContext.id == node.id);
    if (!correspondingPage)continue;
    files.push({
      name: node.name,
      path: correspondingPage.path
    });
  }

  fileListCache = files;
  return files;
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