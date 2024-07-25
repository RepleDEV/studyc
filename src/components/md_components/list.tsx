import * as React from "react";
import type { Components } from "react-markdown/lib/ast-to-react";

const list: Components = {
    ul({children}) {
        return <ul className="list-disc my-4 pl-8">{children}</ul>
    }
}

export default list;