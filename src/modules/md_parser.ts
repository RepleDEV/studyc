import matter from "gray-matter";

type MetaType = string | string[] | number;

export default class MDPageParser {
	raw: string = "";
	meta: Record<string, MetaType> = {};
	converted: string = "";

	constructor(raw: string) {
		this.raw = raw;
		this.converted = this.raw;
		this.getMeta();
		this.fixMathEnclosing();
	}

	/**
	 * Checks if math enclosings ($$) have \n or <space> on either side & adds it when necessary
	 */
	fixMathEnclosing() {
		const regex = /(?<!\n| )\$\$|\$\$(?!\n| )/g;
		let text = this.converted
		let m = regex.exec(text);

		while (m !== null) {
			if (m.index == regex.lastIndex) {
				regex.lastIndex++;
			}

			let index = m.index;

			// Checks if front side has newline
			if (this.converted[m.index] == "\n")
				index += 2

			this.converted = this.converted.slice(0, index) + "\n" + this.converted.slice(index);
			
			text = this.converted
			m = regex.exec(text);
		}
	}

	getMeta() {
		const m = matter(this.converted);
		this.converted = m.content;
		this.meta = m.data;
	}
}
