import type { FileSystemNode } from "gatsby-source-filesystem";
import moment from "moment";

interface QueryNodesResult<T> {
	nodes: T[];
}

type AllFile = QueryNodesResult<FileSystemNode>;

export interface SitePageNode {
	path: string;
	pageContext: Partial<{
		id: string;
	}>;
}

type AllSitePage = QueryNodesResult<SitePageNode>;

export interface QueryResults {
	allFile: AllFile;
	allSitePage: AllSitePage;
}

export interface File {
	id: string;
	name: string;
	path: string;
	category: string;
	base: string;
	publicURL: string;
	lastModified: moment.Moment;
}

export type FileList = File[];

export class File implements File {
	constructor(file: FileSystemNode, path: string) {
		this.id = file.id;
		this.name = file.name;
		this.path = path;
		this.category = path.split("/")[2];

		this.base = file.base;
		this.publicURL = file.publicURL as string || "";

		const fields = file.fields as Record<string, unknown>

		if (fields && fields.lastModified) {
			this.lastModified = moment(fields.lastModified as number);
		}
	}
}

export function processFiles(allFile: AllFile, allSitePage: AllSitePage) {
	const files = [] as FileList;

	// JANK!
	for (const node of allFile.nodes) {
		const correspondingPage = allSitePage.nodes.find(
			(page) => page.pageContext.id == node.id,
		);
		if (!correspondingPage) continue;
		files.push(new File(node, correspondingPage.path));
	}

	return files;
}
