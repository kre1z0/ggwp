import React from "react";

import articles from "../data/articles";
import { Articles } from "../components/Articles";

const Index = () => {
  return (
    <Articles data={{ allMarkdownRemark: articles }} articlesPerPage={8} />
  );
};

export default Index;
