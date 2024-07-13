import { u } from "unist-builder";
import { visit } from "unist-util-visit";

const blockQuoteRegex = /\[\!([a-zA-Z]*)\](.*)(?:\n|$)?/gm

export default function obsidianBlockQuote() {
    return (tree: any) => {
        visit(tree, (n) => {
            if (n.type !== "blockquote") {
                return n;
            }
            const firstParagraph = n.children[0].children[0].value as string;
            const m = blockQuoteRegex.exec(firstParagraph);

            if (m) {
                const replaced = firstParagraph.replace(blockQuoteRegex, "");
                n.children[0].children[0].value = replaced;

                n.data = { hProperties: { "data-type": m[1] }};

                // Basically like
                `
                <blockquote data-type={m[1]}>
                    <span>{bqTitleText}</span>
                </blockquote>
                `

                const bqTitleText = m[2] || (m[1][0].toUpperCase() + m[1].slice(1));
                const bqTitleNode = u("node", { 
                    children: [
                        u("node", {
                            data: {
                                hChildren: [
                                    u("text", bqTitleText)
                                ],
                                hName: "span",
                                hProperties: {
                                    "data-type": "blockquote_title"
                                }
                            }
                        })
                    ],
                });

                n.children.unshift(bqTitleNode)
            }
        });
        
        return tree;
    };
}