import MDPage from "../src/modules/md_parser";
import fs from "fs";

const testPage = fs.readFileSync(`${__dirname}/testPage.md`, {
	encoding: "utf-8",
});

describe("Parse front-matter (meta) from md", () => {
	const parser = new MDPage(testPage);

	test("General Metadata", () => {
		expect(parser.meta.meta).toBe("data");
	});
	test("Tags", () => {
		expect(parser.meta.tags).toBe("tag1, tag2");
	});
	test("Should remove meta", () => {
		// Start of string shouldn't be ---
		expect(parser.converted).toEqual(expect.not.stringMatching(/^---/));
	});
	test.each(
		[
			" $$ ",
			" \n$$ ",
			" $$\n ",
			" \n$$\n "
		]
	)("Dealing with faulty math double tags: %j", (str) => {
		const parser = new MDPage(str);
		parser.fixMathEnclosing();
		expect(parser.converted).toBe(" \n$$\n ");
	});
});