import React from "react";

export default function HomepageLayout({ children }: React.PropsWithChildren) {
    return (
        <>
        {/* NAVBAR */}
        <main
            className="my-16 mx-32 flex justify-center font-body flex-col"
        >{children}</main>
        {/* FOOTER */}
        </>
    )
}