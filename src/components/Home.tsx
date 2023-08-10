import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Link from "./Link";

const mainPagesQuery = graphql`
query Query {
  allFile(
    filter: {
      relativePath: {
        regex:"/^((?!\/Topics).)*$/gm"
      },
      ext: {
        eq: ".md"
      }
    }
  ) {
    nodes {
      name,
      ext,
      internal {
        content
      }
    }
  }
}
`;

interface PageQueryReturn {
    name: string;
    ext: string;
    internal: {
        content: string
    }
}

interface HomeProps {
  setPage: React.Dispatch<React.SetStateAction<string>>
}
function Home(props: HomeProps): React.ReactNode {
    const data = useStaticQuery(mainPagesQuery).allFile.nodes as PageQueryReturn[]

    const links: React.ReactNode[] = []
    let i = 0;
    for (const page of data) {
      const onClick = () => {
        props.setPage(page.name)
      }
      links.push(
        <li key={page.name + i}>
          <Link onClick={onClick}>{page.name}</Link>
        </li>
      )
      i++;
    }

    return (
        <div className="page home">
            <h1>StudyC</h1>
            <h3>To be honest I completely forgot what StudyC meant</h3>
            <h5>Links:</h5>
            <ul>
                {links}
            </ul>
        </div>
    )
}

export default Home;