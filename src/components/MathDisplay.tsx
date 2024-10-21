import React, { PropsWithChildren } from "react";

export default function MathDisplay({ children }: PropsWithChildren) {
	return <div className="self-center max-w-full min-h-fit overflow-x-auto">{children}</div>;
}
