import React from "react";

import { format } from "../../utils/date";
import { Link, Figure, Preview, Title, Description, Date, Tags, Tag } from "./styled";

export const ArticlePreview = ({ preview, title, description, date, tags, slug }) => (
  <Link to={slug}>
    <Figure>
      <Preview src={preview} />
      <Title>{title}</Title>
      <Date>{format(date)}</Date>
      <Description>{description}</Description>
      {tags && (
        <Tags>
          <Tag>Теги:</Tag>
          {tags.map((tag, index, array) => (
            <Tag key={`${tag}-${index}`}>
              {tag}
              {index + 1 !== array.length ? "," : "."}
            </Tag>
          ))}
        </Tags>
      )}
    </Figure>
  </Link>
);
