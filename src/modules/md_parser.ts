import matter from "gray-matter";

type MetaType = string | string[] | number;

export default class MDPageParser {
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
