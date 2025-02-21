import React, { useMemo } from "react";
import { create } from "zustand";
import { HeaderObject } from "../plugins/remarkHeaderCounter";

interface HeaderState {
    headers: HeaderObject[],
    setHeaders: (headers: HeaderObject[]) => void
    pushHeader: (header: HeaderObject) => void
    scrollPosition: [number, number],
    setScroll: (scroll: [number, number]) => void,
}
export const useHeadersState = create<HeaderState>()((set) => ({
    headers: [],
    setHeaders: (headers) => set(() => ({ headers })),
    pushHeader: (header) => set((state) => ({ headers: [...state.headers, header] })),
    scrollPosition: [0, 0],
    setScroll: (scrollPosition: [number, number]) => set(() => ({ scrollPosition })),
}));

function HeaderNavigation(
    { children, depth, visible }: React.PropsWithChildren<{ depth: number, visible?: boolean }>
) {
    // For depth > 2
    let el = <p className="opacity-85 pl-2">{children}</p>;

    if (depth == 1) {
        el = <p className="font-medium">{children}</p>;
    } else if (depth == 2) {
        el = <p className="">{children}</p>
    }

    const hiddenClassName = visible && "text-purple font-semibold";

    return (
        <div className={`flex flex-row mb-2 text-base select-none ${hiddenClassName}`}>
            <span className="mr-2 font-bold opacity-70">{">"}</span>
            {el}
        </div>
    );
}

export default function ContentOverview() {
    const { headers, scrollPosition } = useHeadersState();
    const elements = useMemo(() => { 


        return headers.map<React.ReactNode>(
            (header) => (
            <HeaderNavigation depth={header.depth} visible={scrollPosition[0] < header.scrollHeight && scrollPosition[1] > header.scrollHeight}>
                {header.text}
            </HeaderNavigation>
        ))
     }, [headers, scrollPosition]);

    return (
        <div className="flex flex-col mt-10">
            {elements}
        </div>
    );
}