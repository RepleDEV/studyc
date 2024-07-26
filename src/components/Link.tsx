import React, { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import * as gatsby from "gatsby";

export default function Link({ children, className, ...props }: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>): React.ReactNode {
    return (
        <gatsby.Link 
            className={`${className} text-purple visited:text-blue-600 underline font-semibold`} to={props.href || ""}>
        {children}</gatsby.Link>
    )
}