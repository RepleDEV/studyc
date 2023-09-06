import React, { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export default function Link({ children, className, ...props }: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>): React.ReactNode {
    return (
        <a 
            className={`${className} text-purple-400 visited:text-blue-600 underline font-semibold`}
            {...props}>
        {children}</a>
    )
}