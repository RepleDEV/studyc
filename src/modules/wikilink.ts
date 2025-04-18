import type { FileList } from "./listFiles";

export default class Wikilink {
	link: string;
	path: string;
	blockTarget = "";
	title = "";
	type: "page" | "image" = "page";
	constructor(link: string, fileList: FileList, isImage?: boolean) {
		this.link = link;

		// Okay, I gotta admit this is from ChatGPT (i'm a fool)
		const regex = /^([A-Za-z0-9 .\/]+)((?:\^|\#)[^|]+)?(\|.*)?$/gm;
		const m = regex.exec(link);
		if (m) {
			const [_, ...groups] = m;
			this.path = groups[0].toLowerCase();

			this.title = (groups[2] || "").substring(1) || this.path;
			this.blockTarget = (groups[1] || "").substring(1);
			this.type = isImage ? "image" : "page";
			if (this.path.includes("notes/")) {
				this.path = "/" + this.path;
				this.path = this.path.replaceAll(" ", "-");
			} else {
				this.getFullPath(fileList);
			}
			return;
		}
		this.path = "";
	}

	getFullPath(fileList: FileList) {
		const path = this.path.toLowerCase();
		const file = fileList.find(
			(file) =>
				file.name.toLowerCase() == path ||
				file.base.toLowerCase() == path,
		);
		if (file) {
			if (this.type == "image") {
				this.path = file.publicURL as string;
				return;
			}
			this.path = file.path;
		}
	}
}
