import React, { useMemo } from "react";
import { create } from "zustand";
import { HeaderObject } from "../plugins/remarkHeaderCounter";

interface HeaderState {
    headers: HeaderObject[],
    setHeaders: (headers: HeaderObject[]) => void
    pushHeader: (header: HeaderObject) => void
}
export const useHeadersState = create<HeaderState>()((set) => ({
    headers: [],
    setHeaders: (headers) => set(() => ({ headers })),
    pushHeader: (header) => set((state) => ({ headers: [...state.headers, header] })),
}));

function HeaderNavigation({ children, depth }: React.PropsWithChildren<{ depth: number }>) {
    // For depth > 2
    let el = <p className="opacity-85 pl-2">{children}</p>;

    if (depth == 1) {
        el = <p className="font-medium">{children}</p>;
    } else if (depth == 2) {
        el = <p className="">{children}</p>
    }
    return (
        <div className="flex flex-row mb-2 text-base select-none">
            <span className="mr-2 font-bold opacity-70">{">"}</span>
            {el}
        </div>
    );
}

export default function ContentOverview() {
    const headers = useHeadersState((state) => state.headers);
    const elements = useMemo(() => (
        headers.map<React.ReactNode>(
            (header) => (
            <HeaderNavigation depth={header.depth}>
                {header.text}
            </HeaderNavigation>
        ))
    ), [headers]);

    return (
        <div className="flex flex-col mt-10">
            {elements}
        </div>
    );
}