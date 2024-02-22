import React, { PropsWithChildren } from "react";

export default function Title({ children, ...props }: PropsWithChildren) {
    return (
        <h1 
            data-testid="page-title"
            className="mb-10 text-8xl font-semibold lowercase tracking-tight text-purple text-center"
            {...props}>
            {children}
        </h1>
    )
}