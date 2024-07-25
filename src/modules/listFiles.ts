import type { FileSystemNode } from "gatsby-source-filesystem";

interface QueryNodesResult<T> {
  nodes: T[];
}

type AllFile = QueryNodesResult<FileSystemNode>;

export interface SitePageNode {
  path: string;
  pageContext: Partial<{
    id: string
  }>;
}

type AllSitePage = QueryNodesResult<SitePageNode>;

export interface QueryResults {
  allFile: AllFile;
  allSitePage: AllSitePage;
}

export type ExtendedFSNode = FileSystemNode & {path: string};
export type FileList = ExtendedFSNode[];

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