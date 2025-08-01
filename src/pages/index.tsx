import React, { useState } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import ListFiles from "../components/ListFiles";
import SideBarSubject from "../components/SideBarSubject";

import Sigma from "../../assets/svg/sigma.svg";

function App(): React.ReactNode {
	const [get_searchInput, set_searchInput] = useState("");

	return (
		<Layout margins={false} >
			<div className="pl-14 pt-10 hidden md:flex flex-col flex-[0_0_256px] bg-dark_blue">
				<Title className="mr-7 border-b-2 border-white">StudyC</Title>
				<div className="text-white mt-12 mb-3 pr-3 leading-4">
					<SideBarSubject text="math"><Sigma className="stroke-white stroke-2"/></SideBarSubject>
				</div>
			</div>
			<div className="pt-0 h-screen flex">
				<div className="h-full w-3 bg-red-600"/>
				<div className="h-full w-3 bg-orange-500"/>
				<div className="h-full w-3 bg-yellow-200"/>
			</div>
			<div className="pr-14 pl-7 pt-10 flex flex-1 flex-col">
				<Title className="md:hidden mb-5">StudyC</Title>
				<SearchBar onInput={set_searchInput} />
				<ListFiles searchInput={get_searchInput} />
			</div>
		</Layout>
	);
}

export default App;
