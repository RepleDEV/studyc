import * as React from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

import { transformHeaders } from "../../plugins/remark-obsidian-wikilink";

const headers: Components = {
    h2({ children, ...props}) {
        return <h2 {...props} className="text-3xl font-semibold mt-5" id={transformHeaders(children)}>{children}</h2>
    },
    h3({children, ...props}) {
        return <h3 {...props} className="text-2xl font-semibold mt-5" id={transformHeaders(children)}>{children}</h3>
    },
};

export default headers;