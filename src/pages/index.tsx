import React,{ useState, useContext, PropsWithChildren } from "react"
import Layout from "../components/Layout";
import Title from "../components/Title";
import { graphql, useStaticQuery, Link } from "gatsby";
import slugify from "slugify";
import SearchBar from "../components/SearchBar";
import TopicList from "../components/TopicList";
import Topics from "../components/Topics";

interface QueryResults {
  allFile: {
    nodes: {
      id: string;
      name: string;
    }[]; 
  } 
  allSitePage: {
    nodes: {
      path: string;
      pageContext: Partial<{
        id: string
      }>;
    }[];
  }
}

function getListOfFiles() {
  const query = graphql`
  {
    allSitePage {
      nodes {
        path
        pageContext
      }  
    }
    allFile(filter: { ext: { eq: ".md" } }) {
      nodes {
        id
        name
      }
    }
  }
  `;

  const queryRes = useStaticQuery(query) as QueryResults;
  const files = [] as {name: string; path: string;}[];

  console.log(queryRes.allSitePage.nodes)

  // JANK!
  for (const node of queryRes.allFile.nodes) {
    const correspondingPage = queryRes.allSitePage.nodes.find((page) => page.pageContext.id == node.id);
    if (!correspondingPage)continue;
    files.push({
      name: node.name,
      path: correspondingPage.path
    });
  }

  return files;
}

function ListFiles() {
  const fileList = getListOfFiles();
  return (
    <div className="flex flex-1 flex-col overflow-y-scroll">
      {
        fileList.map((file) => {
          return (
            <Link to={file.path}>
              {file.name}
            </Link>
          );
        })
      }
    </div>
  );
}

function App(): React.ReactNode {
  const [get_searchInput, set_searchInput] = useState("");

  return (
    <Layout>
      <div className="flex flex-[0_0_200px]">
        <Title>StudyC</Title>
      </div>
      <div className="flex flex-1 flex-col">
        <SearchBar onInput={set_searchInput}/>
        <ListFiles/>
      </div>
    </Layout>
  );
}

export default App;