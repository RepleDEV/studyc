import React from "react";

interface Props {
	onInput?: (input: string) => void;
	placeholder?: string;
}

export default function SearchBar(props: Props): React.ReactNode {
	return (
		<div className="flex h-[58px]">
			<input
				type="text"
				className="w-full border-2 rounded-md border-purple focus:outline-none px-4 text-2xl text-purple placeholder:purple placeholder:italic placeholder:lowercase"
				placeholder={props.placeholder || "Search for File"}
				onInput={(e) => {
					e.stopPropagation();
					if (props.onInput) props.onInput(e.currentTarget.value);
				}}
			/>
		</div>
	);
}
