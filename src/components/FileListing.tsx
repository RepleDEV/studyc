import React from "react";
import { File } from "../modules/listFiles";
import { Link } from "gatsby";

interface FileListingProps extends React.PropsWithChildren {
	file: File;
}
export default function FileListing({ file }: FileListingProps) {
	const subject = file.category;
	const url = file.path;

	return (
		<Link to={url} className="border-b-2 group">
			<div className="flex flex-row my-1">
				<span className="group-hover:translate-x-2 transition-transform">
					{file.name}
				</span>
				<span className="ml-auto">{subject}</span>
			</div>
		</Link>
	);
}
