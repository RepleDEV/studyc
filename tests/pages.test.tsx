import React from "react";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Page, { PageProps } from "../src/pages/notes/{File.relativeDirectory}/{File.name}";
import fs from "fs";

const pageProps: PageProps = {
    params: {
        base: "testPage.md",
        relativeDirectory: "tests",
        name: "testPage",
        publicURL: "/static/1337/testPage.md",
        sourceInstanceName: "pages",
    },
    data: {
        file: {
            name: "testPage",
            internal: {
                content: "",
            }
        },
        allFile: {
            nodes: [
                {
                    base: "testPage.md",
                    relativeDirectory: "tests",
                    name: "testPage",
                    publicURL: "/static/1337/testPage.md",
                    sourceInstanceName: "pages",
                },
                {
                    base: "img.png",
                    relativeDirectory: "tests",
                    name: "img",
                    publicURL: "/static/1337",
                    sourceInstanceName: "images"
                }
            ],
        }
    }
}

describe("Page component testing", () => {
    const testPage = fs.readFileSync(`${__dirname}/${pageProps.params.base}`, { encoding: "utf-8" });
    pageProps.data.file.internal.content = testPage;

    test("Displays the correct title", () => {
        const page = render(<Page {...pageProps}/>);
        expect(page.queryByTestId("page-title")).toHaveTextContent(pageProps.params.name)
    });

    test("Headers", () => {
        const page = render(<Page {...pageProps}/>);

        const [_, h1, h2, h3] = page.queryAllByRole("heading")
        expect(h1).toHaveTextContent("h1");
        expect(h2).toHaveTextContent("h2");
        expect(h3).toHaveTextContent("h3");
    });

    test("Paragraph", () => {
        const page = render(<Page {...pageProps}/>);
        const paragraph = page.baseElement.querySelector("p");
        const strong = page.baseElement.querySelector("strong");
        const italic = page.baseElement.querySelector("em");

        expect(paragraph).toHaveTextContent("This is a paragraph. This is bold, italic, .");

        expect(strong).not.toBeNull();
        expect(paragraph).toContainHTML(strong?.outerHTML as string);

        expect(italic).not.toBeNull();
        expect(paragraph).toContainHTML(italic?.outerHTML as string);
    });

    test("Inline-math", () => {
        const page = render(<Page {...pageProps}/>);
        const el = page.baseElement.querySelector("span.inline-block > mjx-container");

        expect(el).not.toBeNull();
    });

    test("Math block", () => {
        const page = render(<Page {...pageProps}/>);
        const el = page.baseElement.querySelector("div > mjx-container");

        expect(el).not.toBeNull();
        expect(el?.parentElement).toHaveClass("flex");
        expect(el?.parentElement).toHaveClass("justify-center");
    });

    test("Lists", () => {
        const page = render(<Page {...pageProps}/>);
        const list = page.queryByRole("list") as HTMLElement;

        expect(list).not.toBeNull();
        expect(list.children).toHaveLength(4)
        
        for (const child of list.children) {
            expect(child.nodeName).toBe("LI");
        }
        
        expect(1).toBe(1);
    });

    test("Links", () => {
        const page = render(<Page {...pageProps}/>);
        const [link, wikilink, emptyWikilink] = page.queryAllByRole("link") as HTMLElement[];

        expect(link).toHaveTextContent("This is a link");
        expect(link.getAttribute("href")).toBe("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

        const cFile = pageProps.data.allFile.nodes[0]
        expect(wikilink).toHaveTextContent("WikiLink");
        expect(wikilink.getAttribute("href")).toBe(`/notes/${cFile.relativeDirectory}/testpage`)

        expect(emptyWikilink).toHaveTextContent("emptyWikiLink");
        expect(emptyWikilink.getAttribute("href")).toBe("#");
    });
    
    test("Image(s)", () => {
        const page = render(<Page {...pageProps}/>);
        const img = page.baseElement.querySelector("img");

        expect(img).not.toBeNull();
        expect(img?.getAttribute("src")).toBe(pageProps.data.allFile.nodes[1].publicURL);
    });

    test("Callout", () => {
        const page = render(<Page {...pageProps}/>);
        const bq = page.baseElement.querySelector("blockquote");

        expect(bq).not.toBeNull();
        expect(bq?.querySelector("span[data-type=\"blockquote_title\"]")).toHaveTextContent("Callout");
        expect(bq?.querySelector("p")).toHaveTextContent("This is a Callout!");
    })
});