import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import fs from "fs";

import Page, {
	PageProps,
} from "../src/pages/notes/{File.relativeDirectory}/{File.name}";
import FSNodeFactory from "./modules/FSNodeFactory";
import SPNFactory from "./modules/SPNFactory";

const testPageFSN = FSNodeFactory("testPage", "md", "page");
const imgFSN = FSNodeFactory("img", "png", "image");

const fileNodes = [testPageFSN, imgFSN];

const sitePageNodes = fileNodes.map(SPNFactory);

const pageProps: PageProps = {
	params: testPageFSN,
	data: {
		file: {
			name: "testPage",
			internal: {
				content: "",
			},
		},
		allSitePage: {
			nodes: sitePageNodes,
		},
		allFile: {
			nodes: fileNodes,
		},
	},
};

describe("Page component testing", () => {
	const testPage = fs.readFileSync(`${__dirname}/${pageProps.params.base}`, {
		encoding: "utf-8",
	});
	pageProps.data.file.internal.content = testPage;

	test("Displays the correct title", () => {
		const page = render(<Page {...pageProps} />);
		expect(page.queryByTestId("page-title")).toHaveTextContent(
			pageProps.params.name,
		);
	});

	test("Content overview", () => {
		const page = render(<Page {...pageProps} />);
		const headers = page.baseElement.querySelectorAll("main > div:nth-child(1) p");

		expect(headers[0]).toHaveTextContent("h1");
		expect(headers[1]).toHaveTextContent("h2");
		expect(headers[2]).toHaveTextContent("h3");
	});

	test("Headers", () => {
		const page = render(<Page {...pageProps} />);

		const [_, h1, h2, h3] = page.queryAllByRole("heading");
		expect(h1).toHaveTextContent("h1");
		expect(h2).toHaveTextContent("h2");
		expect(h3).toHaveTextContent("h3");
	});

	test("Paragraph", () => {
		const page = render(<Page {...pageProps} />);
		const mainArticleElement = page.baseElement.querySelector("main > div:nth-child(3)");
		const paragraph = mainArticleElement?.querySelector("p");
		const strong = mainArticleElement?.querySelector("strong");
		const italic = mainArticleElement?.querySelector("em");

		expect(paragraph).toHaveTextContent(
			"This is a paragraph. This is bold, italic, ",
		);

		expect(strong).not.toBeNull();
		expect(paragraph).toContainHTML(strong?.outerHTML as string);

		expect(italic).not.toBeNull();
		expect(paragraph).toContainHTML(italic?.outerHTML as string);
	});

	test("Inline-math", () => {
		const page = render(<Page {...pageProps} />);
		const el = page.baseElement.querySelector(
			"span.inline-block > mjx-container",
		);

		expect(el).not.toBeNull();
	});

	test("Math block", () => {
		const page = render(<Page {...pageProps} />);
		const el = page.baseElement.querySelector("div > mjx-container");

		expect(el).not.toBeNull();
	});

	test("Lists", () => {
		const page = render(<Page {...pageProps} />);
		const list = page.queryByRole("list") as HTMLElement;

		expect(list).not.toBeNull();
		expect(list).toHaveClass("list-disc");
		expect(list.children).toHaveLength(4);

		for (const child of list.children) {
			expect(child.nodeName).toBe("LI");
		}

		expect(1).toBe(1);
	});

	test("Links", () => {
		const page = render(<Page {...pageProps} />);
		const [_, link, wikilink, emptyWikilink] = page.queryAllByRole(
			"link",
		) as HTMLElement[];

		expect(link).toHaveTextContent("This is a link");
		expect(link.getAttribute("href")).toBe(
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		);

		expect(wikilink).toHaveTextContent("WikiLink");

		expect(emptyWikilink).toHaveTextContent("emptywikilink");
	});

	test("Image(s)", () => {
		const page = render(<Page {...pageProps} />);
		const img = page.baseElement.querySelector("img");

		expect(img).not.toBeNull();
		expect(
			img
				?.getAttribute("src")
				?.startsWith("https://raw.githubusercontent.com"),
		).toBeTruthy();
	});

	test("Callout", () => {
		const page = render(<Page {...pageProps} />);
		const bq = page.baseElement.querySelector("blockquote");

		expect(bq).not.toBeNull();
		expect(
			bq?.querySelector('span[data-type="blockquote_title"]'),
		).toHaveTextContent("Callout");
		expect(bq?.querySelector("p")).toHaveTextContent("This is a Callout!");
	});
});
