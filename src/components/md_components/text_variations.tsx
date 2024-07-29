import * as React from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

import MathInline from "../MathInline";
import Link from "../Link";
import Bold from "../Bold";

const text_variations: Components = {
	a({ children, ...props }) {
		return <Link {...props}>{children}</Link>;
	},
	p({ children, ...props }) {
		return (
			<p {...props} className="mt-5">
				{children}
			</p>
		);
	},
	strong({ children, ...props }) {
		return <Bold {...props}>{children}</Bold>;
	},
	span({ children, className, ...props }) {
		if (className?.includes("math-inline")) {
			return <MathInline {...props}>{children}</MathInline>;
		}
		///@ts-ignore nextline
		const data_type = props["data-type"] as string | null;
		if (data_type && data_type === "blockquote_title") {
			return (
				<span
					className="font-semibold text-purple-600 text-lg"
					{...props}
				>
					{children}
				</span>
			);
		}

		return (
			<span className={className} {...props}>
				{children}
			</span>
		);
	},
};

export default text_variations;
