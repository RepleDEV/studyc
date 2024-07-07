import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
        {/* NAVBAR */}
        <main
            className="px-14 py-10 w-screen h-screen font-body flex flex-row"
        >{children}</main>
        {/* FOOTER */}
        </>
    )
}