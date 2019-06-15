import CMS from "netlify-cms";

import CountrySelect from "./widgets/CountrySelect";
import CountrySelectPreview from "./widgets/CountrySelect/CountrySelectPreview";
import ArticlePreview from "./preview-templates/article-preview";

CMS.registerWidget("country-select", CountrySelect, CountrySelectPreview);
CMS.registerPreviewTemplate("articles", ArticlePreview);
