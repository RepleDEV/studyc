import React from "react";

interface LinkProps extends React.PropsWithChildren {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
export default function Link(props: LinkProps): React.ReactNode {
    const onClick: React.MouseEventHandler<HTMLAnchorElement> = (...args) => {
        args[0].stopPropagation();
        if (props.onClick) {
            props.onClick(...args);
        }
    }

    return (
        <a href="#" onClick={onClick}>{props.children}</a>
    )
}