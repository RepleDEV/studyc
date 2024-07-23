import React, { useState } from "react";
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
import { QueryResults, processFiles } from "../../../modules/listFiles";
import SearchBar from "../../../components/SearchBar";
import { FileSystemNode } from "gatsby-source-filesystem";

export interface PageProps {
    params: FileSystemNode;
    data: {
        file: {
            name: string;
            internal: {
                content: string;
            }
        }
    } & QueryResults;
}
export default function Page(props: PageProps) {
    const content = props.data.file.internal.content;
    const fileList = processFiles(props.data.allFile, props.data.allSitePage);
    const page = new MDPage(content);

    const [get_searchInput, set_searchInput] = useState("");

    return (
        <Layout>
            <div className="flex flex-[0_0_200px]">
                <Title>StudyC</Title>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-clip">
                <SearchBar onInput={set_searchInput} placeholder="Search in file"/>
                <div className="pt-5 flex flex-1 flex-col overflow-y-auto overflow-x-clip">
                    <Title>
                        {props.data.file.name}
                    </Title>
                    <ReactMarkdown 
                        children={page.converted}
                        remarkPlugins={[
                            [obsidianWikilink, { fileList }],
                            obsidianBlockQuote,
                            remarkMath,
                            remarkGfm,
                        ]}
                        rehypePlugins={[rehypeMathjax]}
                        components={components}
                    />
                </div>
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
    allSitePage {
      nodes {
        path
        pageContext
      }  
    }
    allFile {
        nodes {
            id
            relativeDirectory
            name
            publicURL
            sourceInstanceName
            base
        }
    }
}
`;