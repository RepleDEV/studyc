import React, { PropsWithChildren } from "react";

export default function Link({ children, ...props }: PropsWithChildren): React.ReactNode {
    return (
        <a 
            className="text-purple-400 visited:text-blue-600 underline font-semibold"
            {...props}>
        {children}</a>
    )
}