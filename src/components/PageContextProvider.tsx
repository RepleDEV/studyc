import React, { useState, useContext } from "react";

interface PageState {
  page: string,
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
export const PageContext = React.createContext<PageState | null>(null);
export const usePageContext = (): PageState => {
  const context = useContext(PageContext);
  console.log(context)
  if (!context) {
    throw new Error("usePageContext used incorrectly");
  }
  return context;
};

interface PageContextProviderProps extends React.PropsWithChildren {
    pageDefaultValue?: string;
}
export function PageContextProvider({children, pageDefaultValue}: PageContextProviderProps) {
    const [page, setPage] = useState(pageDefaultValue || "");

    return (
        <PageContext.Provider value={{page, setPage}}>
            {children}
        </PageContext.Provider>
    )
}