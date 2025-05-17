import React, { PropsWithChildren } from "react";

interface Props {
    text: string;
}
export default function SideBarSubject({ children, text }: PropsWithChildren & Props ) {
    return (
        <div
            className="flex items-center select-none cursor-pointer"
        >
            <div className="w-8">
                { children }
            </div>
            <span className="ml-2 h-fit text-xl">
                { text }
            </span>
        </div>
    );
}