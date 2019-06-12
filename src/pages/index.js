import React from "react";

import { Articles } from "../components/Articles";
import { normalizeData } from "../utils/array";
// ggwp <Articles data={{ allMarkdownRemark: articles }} articlesPerPage={8} />

const Index = ({ articles }) => {
  return <Articles data={normalizeData(articles)} articlesPerPage={8} />;
};

export default Index;
