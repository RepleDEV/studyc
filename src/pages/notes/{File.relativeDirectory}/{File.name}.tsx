import * as React from "react";
import { graphql } from "gatsby";
import MDPage from "../../../modules/md_parser";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import obsidianWikilink  from "../../../plugins/remark-obsidian-wikilink";
import remarkGfm from "remark-gfm";

import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import obsidianBlockQuote from "../../../plugins/remark-obsidian-blockquote";
import components from "../../../components/md_components/components";

export interface FileIdentity {
    relativeDirectory: string;
    name: string;
    publicURL: string;
    sourceInstanceName: string;
    base: string;
}
export interface PageProps {
    params: FileIdentity;
    data: {
        file: {
            name: string;
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
        <Layout>
            <div className="flex flex-[0_0_200px]">
                <Title>StudyC</Title>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-clip">
            <Title>
                {props.data.file.name}
            </Title>
            <ReactMarkdown 
                children={page.converted}
                remarkPlugins={[
                    [obsidianWikilink, { fileIdentities }],
                    obsidianBlockQuote,
                    remarkMath,
                    remarkGfm,
                ]}
                rehypePlugins={[rehypeMathjax]}
                components={components}
            />
            </div>
        </Layout>
    );
}

export const query = graphql`
query($id: String!) {
    file(id: { eq: $id }) {
        name
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