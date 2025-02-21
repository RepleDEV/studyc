import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
import MDPageParser from "../../../modules/md_parser";
import { FileSystemNode } from "gatsby-source-filesystem";
import { QueryResults, processFiles } from "../../../modules/listFiles";

import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import SearchBar from "../../../components/SearchBar";
import MDPage from "../../../components/MDPage";
import FileTitle from "../../../components/FileTitle";
import ContentOverview from "../../../components/ContentOverview";

import { useHeadersState } from "../../../components/ContentOverview";

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

    const ref = useRef<HTMLDivElement>(null);

	const setScroll = useHeadersState((state) => state.setScroll);

	useEffect(() => {
		let scrollPosition: [number, number] = [0, 0];
		let ticking = false;

        if (!ref.current)return;

        const el = ref.current;
        const deltaH = el.parentElement?.offsetHeight || 0;

        setScroll([0, deltaH]);

		el.addEventListener("scroll", () => {
			scrollPosition = [el.scrollTop, el.scrollTop + deltaH];
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setScroll(scrollPosition);

					ticking = false;
				});

				ticking = true;
			}
		});
	}, []);

    return (
        <Layout>
            <div className="hidden md:flex flex-col flex-[0_0_200px]">
                <Title>StudyC</Title>
                <ContentOverview/>
            </div>
            <div className="hidden md:flex bg-gray-400 h-[88%] mr-4 flex-[0_0_2px] self-center" />
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-clip">
                <div className="pt-5 pb-14 flex flex-1 flex-col overflow-y-auto overflow-x-clip" ref={ref}>
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