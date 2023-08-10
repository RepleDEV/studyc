import React,{ useState, useContext } from "react"
import Home from "../components/Home"
import Layout from "../components/Layout";

function App(): React.ReactNode {
  const [page, setPage] = useState("Home");

  return (
    <Layout>
      <Home setPage={setPage}/> :
    </Layout>
  );
}

export default App;