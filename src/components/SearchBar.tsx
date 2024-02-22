import React from "react";

interface Props {
    onInput?: (input: string) => void;
}

export default function SearchBar(props: Props): React.ReactNode {
    return (
        <div className="flex border-4 border-dark_blue rounded-full h-14">
            <input
                type="text"
                className="w-full bg-inherit focus:outline-none px-4 font-2xl"
                placeholder="Search for File"
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