import matter from "gray-matter";
import type { FileIdentity } from "../pages/notes/{File.relativeDirectory}/{File.name}";
import Wikilink from "./wikilink";

type MetaType = string | string[] | number;

export default class MDPage {
    raw: string = "";
    meta: Record<string, MetaType> = {};
    converted: string = "";

    constructor(raw: string) {
        this.raw = raw;
        this.getMeta();
    }

    getMeta() {
        const m = matter(this.raw);
        this.converted = m.content;
        this.meta = m.data;
    }
}