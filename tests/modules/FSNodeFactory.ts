import { FileSystemNode } from "gatsby-source-filesystem";
import { ExtendedFSNode } from "../../src/modules/listFiles";

export default function FSNodeFactory(
	name: string,
	ext: string,
	type: "page" | "image",
): FileSystemNode {
	const cDate = new Date();

	return {
		base: `${name}.${ext}`,
		name,
		publicURL: `/static/${name}.${ext}`,
		sourceInstanceName: type + "s",
		absolutePath: "",
		accessTime: "",
		atime: cDate,
		atimeMs: 0,
		birthTime: cDate,
		changeTime: "",
		children: [],
		ctime: cDate,
		ctimeMs: 0,
		dir: "/tests/",
		ext: `.${ext}`,
		extension: ext,
		gid: 0,
		id: "0",
		internal: {
			type: "file",
			contentDigest: "",
			owner: "",
		},
		mode: 0,
		modifiedTime: "",
		mtime: cDate,
		mtimeMs: 0,
		parent: "",
		prettySize: "",
		relativeDirectory: "tests",
		relativePath: `tests/${name}.${ext}`,
		root: "",
		size: 0,
		uid: 0,
		birthtime: cDate,
		birthtimeMs: 0,
	};
}

export function EFSNodeFactory(
	...props: Parameters<typeof FSNodeFactory>
): ExtendedFSNode {
	return { ...FSNodeFactory(...props), path: `/tests/${props[0]}` };
}
