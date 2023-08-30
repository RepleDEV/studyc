import { FileIdentity } from "../pages/notes/{File.relativeDirectory}/{File.name}";

export default class Wikilink {
    link: string;
    path: string;
    blockTarget = "";
    title = "";
    type: "page" | "image" = "page";
    constructor(link: string, fileIdentities: FileIdentity[]) {
        this.link = link;

        // Okay, I gotta admit this is from ChatGPT (i'm a fool)
        const regex = /^([A-Za-z .]+)(\^[A-Za-z0-9]+)?(\|.*)?$/gm;
        const m = regex.exec(link);
        if (m) {
            const [_, ...groups] = m
            this.path = groups[0];
            this.title = (groups[2] || "").substring(1) || this.path;
            this.path = this.getFullPath(fileIdentities)
            this.blockTarget = (groups[1] || "").substring(1);
            return;
        }
        this.path = "";
    }

    getFullPath(fileIdentities: FileIdentity[]) {
        const { path } = this;
        const fileIdentity = fileIdentities.find((fi) => {
            return fi.name == path || fi.base == path;
        });

        if (fileIdentity) {
            if (fileIdentity.sourceInstanceName == "images") {
                this.type = "image";

                return fileIdentity.publicURL;
            }

            let fullPath = `/notes/${fileIdentity.relativeDirectory}/${path}`;
            // Clean up relative path
            fullPath = fullPath
                .toLowerCase()
                .replace(" ", "-");
            return fullPath
        }

        return path;
    }
}