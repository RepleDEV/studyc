import React, { PropsWithChildren } from "react";

export default function FileTitle({ children, ...props }: PropsWithChildren) {
    return (
        <div className="flex items-center">
            <h1 
                data-testid="page-title"
                className="text-6xl font-semibold my-5 lowercase tracking-tight text-purple"
                {...props}>
                {children}
            </h1>
        </div>
    )
}