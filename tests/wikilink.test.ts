import Wikilink from "../src/modules/wikilink";
import { FileIdentity } from "../src/pages/notes/{File.relativeDirectory}/{File.name}";

const fileIdentity: FileIdentity[] = [
    {
        base: "test.md",
        name: "test",
        publicURL: "",
        relativeDirectory: "tests",
        sourceInstanceName: "pages",
    },
    {
        base: "img.png",
        name: "img",
        publicURL: "/static/someURL/img.png",
        relativeDirectory: "tests",
        sourceInstanceName: "images",
    }
];

describe("WikiLink parsing", () => {
    const link = "test^1111|Test?";
    const wikilink = new Wikilink(link, fileIdentity);
    const cFile = fileIdentity[0];

    test("Target", () => {
        expect(wikilink.path).toBe(`/notes/${cFile.relativeDirectory}/${cFile.name}`);
    });
    test("Text", () => {
        expect(wikilink.title).toBe("Test?");
    });
    test("Subtarget", () => {
        expect(wikilink.blockTarget).toBe("1111");
    });
});

describe("Handling non-full links", () => {
    const link = "test";
    const wikilink = new Wikilink(link, fileIdentity);

    test("Text", () => {
        expect(wikilink.title).toBe("test");
    });
    test("Subtarget", () => {
        expect(wikilink.blockTarget).toBe("");
    });
});

describe("Image links", () => {
    const link = "img.png";
    const wikilink = new Wikilink(link, fileIdentity);

    test("Path", () => {
        expect(wikilink.path).toBe(fileIdentity[1].publicURL);
    });
});

describe("Edge cases", () => {
    test("Empty link", () => {
        const wikilink = new Wikilink("", fileIdentity);
        expect(wikilink.path).toBe("");
    });
    test("Link with no target", () => {
        const wikilink = new Wikilink("test", []);
        expect(wikilink.path).toBe("test");
    });
});