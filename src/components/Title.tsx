import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";

export default function Title({ children, className, ...props }: PropsWithChildren & { className?: string }) {
	return (
		<div className={"flex h-[58px] items-center " + className}>
			<Link
				className="text-4xl h-fit font-title lowercase tracking-tight text-white"
				{...props} to="/"
			>
				{children}
			</Link>
		</div>
	);
}
