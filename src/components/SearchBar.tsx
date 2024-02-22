import React from "react";

interface Props {
    onInput?: (input: string) => void;
}

export default function SearchBar(props: Props): React.ReactNode {
    return (
        <div className="flex h-[58px]">
            <input
                type="text"
                className="w-full border-4 border-dark_blue rounded-full focus:outline-none px-4 text-2xl text-dark_blue placeholder:text-blue_light_text placeholder:italic placeholder:lowercase"
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