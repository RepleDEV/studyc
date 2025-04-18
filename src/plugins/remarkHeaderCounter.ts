import { visit } from "unist-util-visit";

export interface HeaderObject {
    text: string;
    depth: number;
    scrollHeight: number;
}
interface Options {
    headerCountCallback?: (headers: HeaderObject[]) => any;
}
export default function remarkHeaderCounter({ headerCountCallback }: Options) {
    return (tree: any) => {
        const headers: HeaderObject[] = [];

        visit(tree, (n) => {
            if (n.type == "heading") {
                headers.push({
                    text: n.children[0].value,
                    depth: n.depth,
                    scrollHeight: 0,
                });
            }
        });

        if (headerCountCallback)headerCountCallback(headers);

        return tree;
    }
}