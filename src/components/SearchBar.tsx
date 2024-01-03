import React from "react";

interface Props {
    onInput?: (input: string) => void;
}

export default function SearchBar(props: Props): React.ReactNode {
    return (
        <div className="bg-gray-200 p-2 px-4 rounded-full flex">
            <input
                type="text"
                className="w-full bg-inherit focus:outline-none"
                placeholder="Search"
                onInput={(e) =>  {
                        e.stopPropagation();
                        if (props.onInput)
                            props.onInput(e.currentTarget.value)
                    }
                }
            />
        </div>
    )
}