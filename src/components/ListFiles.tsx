import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import type { FileSystemNode } from "gatsby-source-filesystem";

interface QueryNodesResult<T> {
  nodes: T[];
}

type AllFile = QueryNodesResult<FileSystemNode>;

interface SitePageNode {
  path: string;
  pageContext: Partial<{
    id: string
  }>;
}

type AllSitePage = QueryNodesResult<SitePageNode>;

interface QueryResults {
  allFile: AllFile;
  allSitePage: AllSitePage;
}

export type FileList = (FileSystemNode & {path: string})[];

export function processFiles(allFile: AllFile, allSitePage: AllSitePage) {
  const files = [] as FileList;

  // JANK!
  for (const node of allFile.nodes) {
    const correspondingPage = allSitePage.nodes.find((page) => page.pageContext.id == node.id);
    if (!correspondingPage)continue;
    files.push({
      ...node,
      path: correspondingPage.path
    });
  }

  return files;
}

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
  return processFiles(queryRes.allFile, queryRes.allSitePage);
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