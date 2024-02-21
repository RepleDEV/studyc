import React, { PropsWithChildren } from "react";
import QuestionMark from "../../assets/svg/question_mark.svg";
import addComponentStyle from "../modules/addComponentStyle";

interface Props extends PropsWithChildren {
    title?: string;
    Icon?: typeof QuestionMark;
    files?: number;
    last_update?: string;
}

const TopicCardIcon = addComponentStyle("block w-12 h-14");

export default function TopicCard(props: Props): React.ReactNode {
    return (
        <div className="flex flex-row gap-1 items-center h-32 w-64 p-7 border-2 border-gray-400 rounded-xl">
            {/* Left icon */}
            <TopicCardIcon>
                {props.Icon ? <props.Icon/> : <QuestionMark/>}
            </TopicCardIcon>
            <div className="flex flex-col text-sm">
                <div className="font-semibold text-lg">
                    {props.title ? props.title : "subject"}
                </div>
                {/* Files number */}
                <div>{props.files ? props.files : 0} files</div>
                {/* Last update */}
                <div>Last update: {props.last_update}</div>
            </div>
        </div>
    );
}