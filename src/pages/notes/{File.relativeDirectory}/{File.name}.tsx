import * as React from "react";
import { graphql } from "gatsby";
import MDPage from "../../../modules/md_parser";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import obsidianWikilink, { transformHeaders } from "../../../plugins/remark-obsidian-wikilink";
import remarkGfm from "remark-gfm";

import HomepageLayout from "../../../components/HomepageLayout";
import MathDisplay from "../../../components/MathDisplay";
import Bold from "../../../components/Bold";
import MathInline from "../../../components/MathInline";
import Link from "../../../components/Link";
import Title from "../../../components/Title";
import obsidianBlockQuote from "../../../plugins/remark-obsidian-blockquote";

// import "../../../styles/pages.scss";

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
        <HomepageLayout>
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
                components={{
                    h2({children, ...props}) {
                        return <h2 {...props} className="text-3xl font-semibold mt-5" id={transformHeaders(children)}>{children}</h2>
                    },
                    h3({children, ...props}) {
                        return <h3 {...props} className="text-2xl font-semibold mt-5" id={transformHeaders(children)}>{children}</h3>
                    },
                    strong({children, ...props}) {
                        return <Bold {...props}>{ children }</Bold>
                    },
                    span({children, className, ...props}) {
                        if (className?.includes("math-inline")) {
                            return <MathInline {...props}>{children}</MathInline>
                        }
                        ///@ts-ignore nextline
                        const data_type = props["data-type"] as string | null;
                        if (data_type && data_type === "blockquote_title") {
                            return <span className="font-semibold text-purple-600 text-lg" {...props}>{children}</span>
                        }

                        return <span className={className} {...props}>{children}</span>
                    },
                    blockquote({ children }) {
                        return <blockquote className="bg-purple-200 p-5 rounded-xl mt-5">{children}</blockquote>
                    },
                    div({children, className, ...props}) {
                        if (className?.includes("math-display")) {
                            return <MathDisplay>{children}</MathDisplay>
                        }

                        return <div className={className} {...props}>{children}</div>
                    },
                    a({children, ...props}) {
                        return <Link {...props}>{children}</Link>
                    },
                    p({children, ...props}) {
                        return <p {...props} className="mt-5">{children}</p>
                    },
                    ul({children, ...props}) {
                        // Workaround for ordered property being the wrong type
                        const newProps = Object.assign(props, { ordered: `${props.ordered}`}) as Record<string, any>;
                        return <ul className="list-disc list-inside" {...newProps}>{children}</ul>
                    },
                    table({children, ...props}) {
                        return <table className="border-2 border-gray-600" {...props}>{children}</table>
                    },
                    th({children, ...props}) {
                        return <th className="border-2 border-gray-600 text-left px-2" {...props}>{children}</th>
                    },
                    td({children, ...props}) {
                        return <td className="border-2 border-gray-600 px-2" {...props}>{children}</td>
                    },
                }}
            />
        </HomepageLayout>
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