import React, { useEffect, useRef } from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

import { transformHeaders } from "../../plugins/remark-obsidian-wikilink";
import { useHeadersState } from "../ContentOverview";

function HeaderFactory
	<T extends React.ElementType>
	({ depth, children, ...props}: 
		React.ComponentPropsWithoutRef<T> &
		{
			depth: number
		}
	) {
	let el = <h1 {...props} id={transformHeaders(children)}>{children}</h1>;
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
	const ref = useRef<HTMLDivElement>(null);
	// Check first if ref.current is defined, else 0
	const pushHeader = useHeadersState((state) => state.pushHeader);

	useEffect(() => {
		const scrollHeight = ref.current ? ref.current.getBoundingClientRect().top : 0;

		pushHeader({
			depth,
			text: children,
			scrollHeight,
		});
	}, [ref]);

	return <div ref={ref}>{el}</div>;
}

const headers: Components = {
	h1(props) {
		return HeaderFactory<'h1'>({ depth: 1, ...props });
	},
	h2(props) {
		return HeaderFactory<'h2'>({ depth: 2, ...props });
	},
	h3(props) {
		return HeaderFactory<'h3'>({ depth: 3, ...props});
	},
};

export default headers;
