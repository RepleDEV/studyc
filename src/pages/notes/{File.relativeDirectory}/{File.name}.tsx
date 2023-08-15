import * as React from "react";
import { graphql } from "gatsby";
import MDPage from "../../../modules/md_parser";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import obsidianWikilink from "../../../plugins/remark-obsidian-wikilink";

import Layout from "../../../components/Layout";
import MathDisplay from "../../../components/MathDisplay";
import Bold from "../../../components/Bold";
import MathInline from "../../../components/MathInline";
import Link from "../../../components/Link";
import Title from "../../../components/Title";

// import "../../../styles/pages.scss";

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
            <Title>
                {props.data.file.name}
            </Title>
            <ReactMarkdown 
                children={page.converted}
                remarkPlugins={[
                    [obsidianWikilink, { fileIdentities }],
                    remarkMath,
                ]}
                rehypePlugins={[rehypeMathjax]}
                components={{
                    strong({children, ...props}) {
                        return <Bold {...props}>{ children }</Bold>
                    },
                    span({children, className, ...props}) {
                        if (className?.includes("math-inline")) {
                            return <MathInline {...props}>{children}</MathInline>
                        }

                        return <span className={className}>{children}</span>
                    },
                    div({children, className, ...props}) {
                        if (className?.includes("math-display")) {
                            return <MathDisplay>{children}</MathDisplay>
                        }

                        return <div className={className} {...props}>{children}</div>
                    },
                    a({children, ...props}) {
                        return <Link {...props}>{children}</Link>
                    }
                }}
            />
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