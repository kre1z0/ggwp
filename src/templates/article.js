import React from "react";

import { OpenGraph } from "../components/OpenGraph";
import { isReactElement } from "../utils/dom";
import { Content, HTMLContent } from "../cms/common/Content";
import { format } from "../utils/date";
import { Tags } from "../components/Tags";
import { Share } from "../components/Share";
import { Title, Container, Date, Body, Footer, Copyright } from "../styles/article";

export const Article = ({
  title,
  date,
  content,
  description,
  preview,
  url,
  link,
  tags,
  twitterHandle,
}) => {
  const BodyContent = isReactElement(content) ? Content : HTMLContent;
  const ogImage = `${url}${preview}`;
  const siteUrl = `${url}${link}`;

  return (
    <>
      <Container>
        <OpenGraph title={title} ogImage={ogImage} description={description} siteUrl={siteUrl} />
        <Title>{title}</Title>
        <Date>{format(date)}</Date>
        {tags && <Tags tags={tags} />}
        <BodyContent Element={Body} content={content} />
        <Footer>
          <Share url={siteUrl} twitterHandle={twitterHandle} />
          <Copyright>
            © ООО «Рога и копыта», 2019. Все права защищены. На самом деле нет...
          </Copyright>
        </Footer>
      </Container>
    </>
  );
};

export default ({ pageContext }, ...props) => <Article {...props} {...pageContext} />;
