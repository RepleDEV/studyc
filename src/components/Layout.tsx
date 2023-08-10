import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
        {/* NAVBAR */}
        <main>{children}</main>
        {/* FOOTER */}
        </>
    )
}