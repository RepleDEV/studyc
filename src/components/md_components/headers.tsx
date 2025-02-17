import React from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

import { transformHeaders } from "../../plugins/remark-obsidian-wikilink";

function HeaderFactory
	<T extends React.ElementType>
	({ depth, children, ...props}: 
		React.ComponentPropsWithoutRef<T> &
		{
			depth?: number
		}
	) {
	let el = <h1 {...props}></h1>;
	if (depth == 2)	{
		el = ( 
			<h2
				{...props}
				className="text-3xl font-semibold mt-5"
				id={transformHeaders(children)}
			>
				{children}
			</h2>
		);
	} else if (depth == 3) {
		el = (
			<h3
				{...props}
				className="text-2xl font-semibold mt-5"
				id={transformHeaders(children)}
			>
				{children}
			</h3>
		);
	}

	return <>{el}</>;
}

const headers: Components = {
	h2(props) {
		return HeaderFactory<'h2'>({ depth: 2, ...props });
	},
	h3(props) {
		return HeaderFactory<'h3'>({ depth: 3, ...props});
	},
};

export default headers;
