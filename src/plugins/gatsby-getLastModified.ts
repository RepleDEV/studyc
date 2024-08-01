import { CreateNodeArgs } from "gatsby";
import simpleGit from "simple-git";

async function getFromFile(path: string) {
    const git = simpleGit();

    try {
        const log = await git.log({ file: path, n:1 });

        if (log.total > 0 && log.latest) {
            return +new Date(log.latest.date);
        }
    } catch (err) {

    }

    return "";
}

export default async function getLastModified({ node, actions }: CreateNodeArgs) {
    const { createNodeField } = actions;

    if (node.internal.type != "File")
        return;

    const lastModified = await getFromFile(node.absolutePath as string);
    createNodeField({ node, value: lastModified, name: "lastModified"})
}