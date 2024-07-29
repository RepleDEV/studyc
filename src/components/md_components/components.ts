import type { Components } from "react-markdown/lib/ast-to-react";

import headers from "./headers";
import text_variations from "./text_variations";
import table_parts from "./table_parts";
import containers from "./containers";
import list from "./list";

const components: Components = {
	...headers,
	...text_variations,
	...table_parts,
	...containers,
	...list,
};

export default components;
