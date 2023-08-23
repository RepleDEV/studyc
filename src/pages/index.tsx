import React,{ useState, useContext, PropsWithChildren } from "react"
import Link from "../components/Link";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { graphql, useStaticQuery } from "gatsby";
import slugify from "slugify";

function getTopics(topics: TopicsQuery) {
  return topics.allFile.edges.map<Topic>(({ node }) => {
    const { name, relativeDirectory, id } = node;
    return { name, relativeDirectory, id };
  })
}

function getTopicsOfSubject(topics: Topic[], subject: string) {
  return topics.filter((t) => t.relativeDirectory.toLowerCase().startsWith(subject.toLowerCase()));
}

function TopicCard({ children, topics, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { topics : Topic[] }) {
  const links = [];

  for (const topic of topics) {
    if (!topic.relativeDirectory.includes("/")) continue;
    const path = (topic.relativeDirectory + "/" + topic.name)
      .split("/")
      .map(s => slugify(s))
      .join("/")
      .toLowerCase();
    links.push(
      <Link href={`notes/${path}/`} key={topic.id}>{ topic.name }</Link>
    )
  }

  return <div
    className={`p-5 rounded-xl border-4 ${props.className}`}
  >
    <h3 className="font-semibold text-2xl">{children}</h3>
    <div className="flex flex-col">
      {links}
    </div>
  </div>
}

function App(): React.ReactNode {
  const topicsQueryRes = useStaticQuery<TopicsQuery>(topicsQuery);
  const topics = getTopics(topicsQueryRes);
  return (
    <Layout>
      <Title>StudyC</Title>
      <h3 className="text-xl">To be honest I forgot what StudyC means.</h3>
      <div className="flex flex-row mt-5 gap-5">
        <TopicCard topics={getTopicsOfSubject(topics, "math")} className="border-red-200" >Math</TopicCard>
        <TopicCard topics={getTopicsOfSubject(topics, "physics")} className="border-yellow-200" >Physics</TopicCard>
        <TopicCard topics={getTopicsOfSubject(topics, "chemistry")} className="border-green-200" >Chemistry</TopicCard>
      </div>
    </Layout>
  );
}

interface Topic {
  relativeDirectory: string;
  name: string;
  id: string;
}
interface TopicsQuery {
  allFile: {
    edges: {
      node: {
        relativeDirectory: string;
        name: string;
        id: string;
      }
    }[];
  }
}
const topicsQuery = graphql`
query myQuery {
  allFile(filter: {
    sourceInstanceName: {
      eq: "pages"
    }
    ext: {
      eq: ".md"
    }
  }) {
    edges {
      node {
        relativeDirectory
        name
        id
      }
    }
  }
}
`

export default App;