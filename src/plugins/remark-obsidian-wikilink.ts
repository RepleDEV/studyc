import { map } from "unist-util-map";
import { link, text } from "mdast-builder"
import Wikilink from "../modules/wikilink";
import { FileIdentity } from "../pages/notes/{File.relativeDirectory}/{File.name}";
import { u } from "unist-builder";

const wikilinkRegex = /\!*\[\[(.+)\]\]/g;

interface Options {
    fileIdentities: FileIdentity[]
}
export default function obsidianWikilink({ fileIdentities }: Options) {
    return (tree: any) => {
        return map(tree, (node) => {
            // console.log(node);
            const value = node.value as string;
            const m = wikilinkRegex.exec(value);
            if (m) {
                const fullLink = m[0];
                const linkContent = m[1];
                const wikilink = new Wikilink(linkContent, fileIdentities);
                
                const textBeforeWikilink = value.substring(0, m.index);
                const textAfterWikilink = value.substring(m.index + fullLink.length);

                const rNode = wikilink.type === "page" ? 
                    u("link", { 
                        url: wikilink.path,
                        children: [
                        u("text", wikilink.title)
                    ]}) :
                    u("image", { url: wikilink.path })

                const res = u("node", [
                    u("text", textBeforeWikilink),
                    rNode,
                    u("text", textAfterWikilink),
                ]);
                
                return res;
            }

            return node;
        });
    }
}