import React from "react";

export default function Layout({ children, margins }: React.PropsWithChildren<{ margins?: boolean }>) {
	return (
		<>
			{/* NAVBAR */}
			<main className={`${margins == false ? "" : "px-14 pt-10" } w-screen h-screen font-text flex flex-row`}>
				{children}
			</main>
			{/* FOOTER */}
		</>
	);
}
