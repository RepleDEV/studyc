import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";

export default function Title({ children, ...props }: PropsWithChildren) {
	return (
		<div className="flex h-[58px] items-center">
			<Link
				className="text-4xl h-fit font-semibold lowercase tracking-tight text-purple"
				{...props} to="/"
			>
				{children}
			</Link>
		</div>
	);
}
