import React,{ useState, useContext, PropsWithChildren } from "react"
import Link from "../components/Link";
import HomepageLayout from "../components/HomepageLayout";
import Title from "../components/Title";
import { graphql, useStaticQuery } from "gatsby";
import slugify from "slugify";
import SearchBar from "../components/SearchBar";
import TopicList from "../components/TopicList";
import Topics from "../components/Topics";

function App(): React.ReactNode {
  const [get_searchInput, set_searchInput] = useState("");

  return (
    <HomepageLayout>
      <Title>StudyC</Title>
      <SearchBar onInput={set_searchInput}/>
      <div className="mt-20">
        <TopicList>
          <Topics.Math/>
          <Topics.Math/>
          <Topics.Math/>
          <Topics.Math/>
          <Topics.Math/>
        </TopicList>
      </div>
    </HomepageLayout>
  );
}

export default App;