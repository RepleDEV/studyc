import React, { PropsWithChildren } from "react";

export default function MathInline({ children, ...props }: PropsWithChildren) {
    return <span
        className="inline-block"
        {...props}
    >{children}</span>
}