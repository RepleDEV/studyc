import React, { useState } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import ListFiles from "../components/ListFiles";

function App(): React.ReactNode {
	const [get_searchInput, set_searchInput] = useState("");

	return (
		<Layout>
			<div className="flex flex-col flex-[0_0_200px]">
				<Title>StudyC</Title>
				<div className="mt-auto mb-3 pr-3 leading-4">
					studyc made by sesa.<br/><br/>
					please suggest a better name for this project.
				</div>
			</div>
			<div className="flex flex-1 flex-col">
				<SearchBar onInput={set_searchInput} />
				<ListFiles searchInput={get_searchInput} />
			</div>
		</Layout>
	);
}

export default App;
