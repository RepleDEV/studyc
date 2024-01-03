import React from "react";

interface Props {
    onInput?: (input: string) => void;
}

export function SB(props: Props): React.ReactNode {
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

export default class SearchBar extends React.Component<Props> {
    onInput?: (input: string) => void

    constructor(props: Props) {
        super(props);

        this.onInput = props.onInput
    }
    render(): React.ReactNode {
        return (
            <div className="bg-gray-200 p-2 px-4 rounded-full flex">
                <input
                    type="text"
                    className="w-full bg-inherit focus:outline-none"
                    placeholder="Search"
                    onInput={(e) =>  {
                            e.stopPropagation();
                            if (this.onInput)
                                this.onInput(e.currentTarget.value)
                        }
                    }
                />
            </div>
            // <div className="bg-gray-300 p-2 px-4 rounded-full">
            //     <input type="text" className="w-full bg-gray-300 focus:outline-none" placeholder="Search"/>
            // </div>
        )
    }
}