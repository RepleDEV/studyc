import { FileSystemNode } from "gatsby-source-filesystem";
import { SitePageNode } from "../../src/modules/listFiles";

export default function SPNFactory(file: FileSystemNode): SitePageNode {
    return {
        path: file.dir + file.name,
        pageContext: {
            id: file.id,
        }
    }
}