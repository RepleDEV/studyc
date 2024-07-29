import React from "react";
import TopicCard from "./TopicCard";

import Sigma from "../../assets/svg/sigma.svg";

const Topics = {
	Math(): React.ReactNode {
		return <TopicCard title="Math" Icon={Sigma} files={99} />;
	},
};

export default Topics;
