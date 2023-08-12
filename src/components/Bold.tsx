import React, { PropsWithChildren } from "react";

export default function Bold({ children, ...props }: PropsWithChildren) {
    return <strong
        className="font-bold text-purple-600"
        {...props}
    >{children}</strong>
}