import React from "react";
import Search from "../../assets/svg/search.svg";

interface Props {
	onInput?: (input: string) => void;
	placeholder?: string;
}

export default function SearchBar(props: Props): React.ReactNode {
	return (
		<div className="flex h-[58px] border-b-2 border-gray-500">
			<Search className="w-10 mx-2" />
			<input
				type="text"
				className="w-full focus:outline-none text-2xl text-purple placeholder:purple placeholder:italic placeholder:lowercase"
				placeholder={props.placeholder || "Search for File"}
				onInput={(e) => {
					e.stopPropagation();
					if (props.onInput) props.onInput(e.currentTarget.value);
				}}
			/>
		</div>
	);
}
