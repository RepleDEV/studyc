import flatMap from "unist-util-flatmap";
import Wikilink from "../modules/wikilink";
import { FileIdentity } from "../pages/notes/{File.relativeDirectory}/{File.name}";
import { u } from "unist-builder";

const wikilinkRegex = /\!*\[\[(.+)\]\]/g;

export const transformHeaders = (str: any) => str.toString().toLowerCase().replace(" ", "_");

interface Options {
    fileIdentities: FileIdentity[]
}
export default function obsidianWikilink({ fileIdentities }: Options) {
    return (tree: any) => {
        let newTree = flatMap(tree, (node: any) => {
            // console.log(node);
            const value = node.value as string;
            const m = wikilinkRegex.exec(value);

            if (!m)return [node];

            const fullLink = m[0];
            const linkContent = m[1];
            const wikilink = new Wikilink(linkContent, fileIdentities);
            
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