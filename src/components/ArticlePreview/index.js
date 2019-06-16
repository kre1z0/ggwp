import React from "react";

import { format } from "../../utils/date";
import { Link, Figure, PreviewContainer, Preview, Title, Description, Date, Tag } from "./styled";

export const ArticlePreview = ({ preview, title, description, date, tags, slug }) => (
  <Link to={slug}>
    <Figure>
      <PreviewContainer>
        <Preview src={preview} />
      </PreviewContainer>
      <Title>{title}</Title>
      <Date>{format(date)}</Date>
      <Description>{description}</Description>
      {tags && <Tag>Теги:</Tag>}
      {tags &&
        tags.map((tag, index, array) => (
          <Tag key={`${tag}-${index}`}>
            {tag}
            {index + 1 !== array.length ? "," : "."}
          </Tag>
        ))}
    </Figure>
  </Link>
);
