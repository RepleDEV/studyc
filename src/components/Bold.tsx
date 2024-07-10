import React, { PropsWithChildren } from "react";

export default function Bold({ children, ...props }: PropsWithChildren) {
    return <strong
        className="font-bold text-dark_blue"
        {...props}
    >{children}</strong>
}