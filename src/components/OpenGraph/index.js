import React from "react";
import Helmet from "react-helmet";

export const OpenGraph = ({ title, siteUrl, ogImage, description }) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:description" content={description} />
    <meta property="twitter:image:src" content={ogImage} />
    <meta property="twitter:description" content={description} />
  </Helmet>
);
