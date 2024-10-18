import React, { useState } from "react";
import { graphql } from "gatsby";
import MDPageParser from "../../../modules/md_parser";
import { FileSystemNode } from "gatsby-source-filesystem";
import { QueryResults, processFiles } from "../../../modules/listFiles";

import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import SearchBar from "../../../components/SearchBar";
import MDPage from "../../../components/MDPage";
import FileTitle from "../../../components/FileTitle";

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
    const page = new MDPageParser(content);

    return (
        <Layout>
            <div className="flex flex-[0_0_200px]">
                <Title>StudyC</Title>
            </div>
            <div className="flex bg-gray-400 h-[88%] mx-2 flex-[0_0_2px] self-center" />
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-clip">
                <div className="pt-5 flex flex-1 flex-col overflow-y-auto overflow-x-clip">
                    <FileTitle>
                        {props.data.file.name}
                    </FileTitle>
                    <MDPage fileList={fileList}>{page.converted}</MDPage>
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