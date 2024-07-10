import flatMap from "unist-util-flatmap";
import Wikilink from "../modules/wikilink";
import { u } from "unist-builder";
import { FileList } from "../modules/getListOfFiles";

const wikilinkRegex = /\!*\[\[(.+)\]\]/g;

export const transformHeaders = (str: any) => str.toString().toLowerCase().replace(" ", "_");

const linkNodeGenerator = (text: string, href: string) => u("link", { 
    url: href,
    children: [
    u("text", text)
]});

function getLinkNode(m: RegExpExecArray, fileList: FileList) {
    const fullLink = m[0];
    const linkContent = m[1];
    const wikilink = new Wikilink(linkContent, fileList, fullLink.startsWith("!"));

    let url = wikilink.path == wikilink.link ? "#" : wikilink.path;
    if (wikilink.blockTarget && wikilink.link.includes("#"))url += "#" + transformHeaders(wikilink.blockTarget);

    const rNode = wikilink.type === "page" ? linkNodeGenerator(wikilink.title, url) : u("image", { url: wikilink.path })
    return rNode;
}

interface Options {
    fileList: FileList
}
export default function obsidianWikilink({ fileList }: Options) {
    return (tree: any) => {
        let newTree = flatMap(tree, (node: any) => {
            const value = node.value as string;
            let m = wikilinkRegex.exec(value);

            if (!m)return [node];

            let lastIndex = 0;
            const res: Record<string, unknown>[] = [];
            while (m != null) {
                if (m.index === wikilinkRegex.lastIndex) {
                    wikilinkRegex.lastIndex++;
                }

                const textBeforeWikilink = value.substring(lastIndex, m.index);
                res.push(u("text", textBeforeWikilink));
                lastIndex = m.index + m[0].length;

                const rNode = getLinkNode(m, fileList);
                res.push(rNode);

                m = wikilinkRegex.exec(value);
            }
            const textAfterWikilink = value.substring(lastIndex);
            res.push(u("text", textAfterWikilink))

            return res;
        });

        return newTree;
    }
}