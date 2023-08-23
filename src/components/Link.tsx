import React, { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export default function Link({ children, ...props }: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>): React.ReactNode {
    return (
        <a 
            className="text-purple-400 visited:text-blue-600 underline font-semibold"
            {...props}>
        {children}</a>
    )
}