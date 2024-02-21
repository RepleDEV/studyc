import React from "react";

export default function TopicList(props: React.PropsWithChildren): React.ReactNode {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {props.children}
        </div>
    );
}