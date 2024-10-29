import React from "react";
import Link from "../components/Link";

function App() {
    return (
        <div className="flex justify-center items-center h-screen font-body flex-col">
            <h1 className="text-9xl font-black text-purple">404</h1>
            <p>No page found here, <Link href="/">come back home</Link>.</p>
        </div>
    );
}

export default App;