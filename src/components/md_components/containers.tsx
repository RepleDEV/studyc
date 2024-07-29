import * as React from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

import MathDisplay from "../MathDisplay";

const containers: Components = {
	blockquote({ children, ...props }) {
		return (
			<blockquote
				className={`
                bg-purple-200 p-5 rounded-xl mt-5 
                data-[type=warning]:bg-yellow-100
                data-[type=done]:bg-green-100
                `}
				{...props}
			>
				{children}
			</blockquote>
		);
	},
	div({ children, className, ...props }) {
		if (className?.includes("math-display")) {
			return <MathDisplay>{children}</MathDisplay>;
		}

		return (
			<div className={className} {...props}>
				{children}
			</div>
		);
	},
};

export default containers;
