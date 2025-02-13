import { FileSystemNode } from "gatsby-source-filesystem";
import Wikilink from "../src/modules/wikilink";
import { EFSNodeFactory } from "./modules/FSNodeFactory";

const fileEFSNode = EFSNodeFactory("test", "md", "page");
const imgEFSNode = EFSNodeFactory("img", "png", "image");

const fileList = [fileEFSNode, imgEFSNode];

describe.each([
	{
		link: "test^1111|Test?",
		text: "Test?",
		subtarget: "1111",
	},
	{
		link: "test#Foo Bar|Test hehe",
		text: "Test hehe",
		subtarget: "Foo Bar",
	},
])("WikiLink parsing", ({ link, text, subtarget }) => {
	const wikilink = new Wikilink(link, fileList);

	test("Target", () => {
		expect(wikilink.path).toBe(fileEFSNode.path);
	});
	test("Text", () => {
		expect(wikilink.title).toBe(text);
	});
	test("Subtarget", () => {
		expect(wikilink.blockTarget).toBe(subtarget);
	});
});

describe("Handling non-full links", () => {
	const link = "test";
	const wikilink = new Wikilink(link, fileList);

	test("Text", () => {
		expect(wikilink.title).toBe("test");
	});
	test("Subtarget", () => {
		expect(wikilink.blockTarget).toBe("");
	});
});

describe("Handling full links", () => {
	const link = "notes/math/topics/file name";
	const wikilink = new Wikilink(link, fileList);

	test("Full link handling", () => {
		expect(wikilink.path).toBe("/notes/math/topics/file-name");
	})
})

describe("Image links", () => {
	const link = "img.png";
	const wikilink = new Wikilink(link, fileList, true);

	test("Path", () => {
		expect(wikilink.path).toBe(imgEFSNode.publicURL);
	});
});

describe("Edge cases", () => {
	test("Empty link", () => {
		const wikilink = new Wikilink("", fileList);
		expect(wikilink.path).toBe("");
	});
	test("Link with no target", () => {
		const wikilink = new Wikilink("test", []);
		expect(wikilink.path).toBe("test");
	});
});
