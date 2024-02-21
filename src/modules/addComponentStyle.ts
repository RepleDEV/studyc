import React from "react";

export default function addComponentStyle(className: string) {
    return ({ children }) => {
        return React.Children.map(children, child => {
            if (!child) return;
            return React.cloneElement(child, {
                className: `${child.props.className || ""} ${className}`
            });
        });
    };
}