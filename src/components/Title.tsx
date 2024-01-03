import React, { PropsWithChildren } from "react";

export default function Title({ children, ...props }: PropsWithChildren) {
    return (
        <h1 
            data-testid="page-title"
            className="mb-8 text-8xl font-bold tracking-tight text-gray-800 text-center"
            {...props}>
            {children}
        </h1>
    )
}