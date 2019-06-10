import React from "react";

import { Article } from "../../templates/article";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";

const ArticlePreview = ({ entry, widgetFor }) => {
  return (
    <PreviewContainer scrollable>
      <Article
        title={entry.getIn(["data", "title"])}
        date={entry.getIn(["data", "date"])}
        description={entry.getIn(["data", "description"])}
        preview={entry.getIn(["data", "preview"])}
        content={widgetFor("body")}
      />
    </PreviewContainer>
  );
};

export default ArticlePreview;
