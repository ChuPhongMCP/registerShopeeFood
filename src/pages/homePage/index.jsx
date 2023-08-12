import React, { memo } from "react";

import Contents from "components/contents";
import questionList from "data/cauhoi.json";

const HomePage = () => {
  return <Contents items={questionList} />;
};

export default memo(HomePage);
