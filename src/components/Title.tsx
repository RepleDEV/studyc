import React, { PropsWithChildren } from "react";

export default function Title({ children, ...props }: PropsWithChildren) {
    return (
        <div className="flex h-[58px] items-center">
            <span 
                className="text-4xl h-fit font-semibold lowercase tracking-tight text-purple"
                {...props}>
                {children}
            </span>
        </div>
    )
}