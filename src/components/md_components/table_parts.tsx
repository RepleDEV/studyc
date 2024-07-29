import * as React from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

const table_parts: Components = {
	table({ children, ...props }) {
		return (
			<table className="border-2 border-gray-600" {...props}>
				{children}
			</table>
		);
	},
	th({ children, ...props }) {
		return (
			<th className="border-2 border-gray-600 text-left px-2" {...props}>
				{children}
			</th>
		);
	},
	td({ children, ...props }) {
		return (
			<td className="border-2 border-gray-600 px-2" {...props}>
				{children}
			</td>
		);
	},
};

export default table_parts;
