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

    // TODO: Finish this
});