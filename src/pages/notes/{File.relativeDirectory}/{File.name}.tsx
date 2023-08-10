import * as React from "react";
import { graphql } from "gatsby";
import MDPage from "../../../modules/md_parser";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import obsidianWikilink from "../../../plugins/remark-obsidian-wikilink";

export interface FileIdentity {
    relativeDirectory: string;
    name: string;
    publicURL: string;
    sourceInstanceName: string;
    base: string;
}
interface PageProps {
    params: FileIdentity;
    data: {
        file: {
            internal: {
                content: string;
            }
        }
        allFile: {
            nodes: FileIdentity[]
        };
    };
}
export default function Page(props: PageProps) {
    const content = props.data.file.internal.content;
    const fileIdentities = props.data.allFile.nodes;
    const page = new MDPage(content, props.data.allFile.nodes);

    return (
        <>
        <div className="etc">
            <ReactMarkdown 
                children={page.converted}
                remarkPlugins={[
                    remarkMath,
                    [obsidianWikilink, { fileIdentities }]
                ]}
                rehypePlugins={[rehypeMathjax]}
                components={{
                    
                }}
            />
        </div>
        </>
    );
}

export const query = graphql`
query($id: String!) {
    file(id: { eq: $id }) {
        internal {
            content
        }
    }
    allFile {
        nodes {
            relativeDirectory
            name
            publicURL
            sourceInstanceName
            base
        }
    }
}
`;