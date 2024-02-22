import React, { PropsWithChildren } from "react";
import QuestionMark from "../../assets/svg/question_mark.svg";
import addComponentStyle from "../modules/addComponentStyle";

interface Props extends PropsWithChildren {
    title?: string;
    Icon?: typeof QuestionMark;
    files?: number;
    last_update?: string;
}

const TopicCardIcon = addComponentStyle("block w-12 h-14 [&>path]:stroke-rust_84 stroke-2");

export default function TopicCard(props: Props): React.ReactNode {
    return (
        <div className="flex flex-row gap-3 items-center h-[115px] w-[276px] p-6 border-2 border-light_blue rounded-xl">
            {/* Left icon */}
            <TopicCardIcon>
                {props.Icon ? <props.Icon/> : <QuestionMark/>}
            </TopicCardIcon>
            <div className="flex flex-col text-sm text-blue_light_text">
                <div className="font-semibold text-lg text-rust_84">
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