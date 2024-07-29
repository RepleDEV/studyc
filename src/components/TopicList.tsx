import React from "react";

export default function TopicList(
	props: React.PropsWithChildren,
): React.ReactNode {
	return (
		<div className="flex flex-wrap content-around justify-center gap-x-16 gap-y-20">
			{props.children}
		</div>
	);
}
