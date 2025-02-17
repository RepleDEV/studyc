import React from "react";
import { FileList } from "../modules/listFiles";

import ReactMarkdown from "react-markdown";
import rehypeMathjax from "rehype-mathjax";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import obsidianBlockQuote from "../plugins/remark-obsidian-blockquote";
import obsidianWikilink from "../plugins/remark-obsidian-wikilink";
import remarkHeaderCounter from "../plugins/remarkHeaderCounter";
import components from "./md_components/components";

import { useHeadersState } from "./ContentOverview";

interface MDPageProps {
	fileList: FileList;
	children: string;
}
export default function MDPage(props: MDPageProps) {
	return (
		<ReactMarkdown
			children={props.children}
			remarkPlugins={[
				[obsidianWikilink, { fileList: props.fileList }],
				obsidianBlockQuote,
				remarkMath,
				remarkGfm,
			]}
			rehypePlugins={[rehypeMathjax]}
			components={components}
		/>
	);
}
