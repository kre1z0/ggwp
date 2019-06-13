import React from "react";

import { isReactElement } from "../utils/dom";
import { Content, HTMLContent } from "../cms/common/Content";
import { format } from "../utils/date";
import { Title, Container, Date, Body } from "../styles/article";
import { Tags } from "../components/Tags";

export const Article = ({ title, date, content, tags }) => {
  const BodyContent = isReactElement(content) ? Content : HTMLContent;

  return (
    <Container>
      <Title>{title}</Title>
      <Date>{format(date)}</Date>
      {tags && <Tags tags={tags} />}
      <BodyContent Element={Body} content={content} />
    </Container>
  );
};

export default ({ pageContext }, ...props) => <Article {...props} {...pageContext} />;
