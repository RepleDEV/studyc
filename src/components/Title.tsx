import React, { PropsWithChildren } from "react";

export default function Title({ children, ...props }: PropsWithChildren) {
    return (
        <h1 
            className="mb-8 text-8xl font-bold tracking-tight text-purple-400"
            {...props}>
            {children}
        </h1>
    )
}