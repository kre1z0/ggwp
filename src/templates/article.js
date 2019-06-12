import React from "react";

import { isReactElement } from "../utils/dom";
import { Content, HTMLContent } from "../cms/common/Content";
import { format } from "../utils/date";
import { Title, Container, Date, Body, TagsList, Tag } from "../styles/article";

export const Article = ({ title, date, content, tags }) => {
  const BodyContent = isReactElement(content) ? Content : HTMLContent;

  return (
    <Container>
      <Title>{title}</Title>
      <Date>{format(date)}</Date>
      {tags && (
        <TagsList>
          {tags.map((tag, index) => (
            <Tag key={`${tag}-${index + 1}`}>{tag}</Tag>
          ))}
        </TagsList>
      )}
      <BodyContent Element={Body} content={content} />
    </Container>
  );
};

export default ({ pageContext }, ...props) => <Article {...props} {...pageContext} />;
