import flatMap from "unist-util-flatmap";
import Wikilink from "../modules/wikilink";
import { u } from "unist-builder";
import { FileList } from "../components/ListFiles";

const wikilinkRegex = /\!*\[\[(.+)\]\]/g;

export const transformHeaders = (str: any) => str.toString().toLowerCase().replace(" ", "_");

interface Options {
    fileList: FileList
}
export default function obsidianWikilink({ fileList }: Options) {
    return (tree: any) => {
        let newTree = flatMap(tree, (node: any) => {
            const value = node.value as string;
            const m = wikilinkRegex.exec(value);

            if (!m)return [node];

            const fullLink = m[0];
            const linkContent = m[1];
            const wikilink = new Wikilink(linkContent, fileList, fullLink.startsWith("!"));
            const textBeforeWikilink = value.substring(0, m.index);
            const textAfterWikilink = value.substring(m.index + fullLink.length);

            let url = wikilink.path == wikilink.link ? "#" : wikilink.path;
            if (wikilink.blockTarget && wikilink.link.includes("#"))url += "#" + transformHeaders(wikilink.blockTarget);

            const rNode = wikilink.type === "page" ? 
                u("link", { 
                    url: url,
                    children: [
                    u("text", wikilink.title)
                ]}) :
                u("image", { url: wikilink.path })

            const res = [
                u("text", textBeforeWikilink),
                rNode,
                u("text", textAfterWikilink),
            ];

            return res;
        });

        return newTree;
    }
}