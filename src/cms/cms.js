import CMS from "netlify-cms";

import ArticlePreview from "./preview-templates/article-preview";

CMS.registerPreviewTemplate("articles", ArticlePreview);
