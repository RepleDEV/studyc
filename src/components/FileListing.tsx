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
		<Link to={url} className="border-b-2 group text-sm">
			<div className="flex flex-row my-2">
				<span className="basis-2/5 font-medium overflow-ellipsis group-hover:translate-x-2 transition-transform">
					{file.name}
				</span>
				<span className="hidden md:block basis-32 overflow-ellipsis text-gray-500">
					{file.lastModified.fromNow()}
				</span>
				<span className="ml-auto text-gray-500">{subject}</span>
			</div>
		</Link>
	);
}
