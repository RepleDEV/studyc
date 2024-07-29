import React, { PropsWithChildren } from "react";

export default function MathDisplay({ children }: PropsWithChildren) {
	return <div className="flex justify-center w-fill">{children}</div>;
}
