import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
        {/* NAVBAR */}
        <main
            className="my-8 mx-10 text-gray-800"
        >{children}</main>
        {/* FOOTER */}
        </>
    )
}