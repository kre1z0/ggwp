import React from "react";

import { format } from "../../utils/date";
import { Figure, PreviewContainer, Preview, Title, Description, Date } from "./styled";

export const ArticlePreview = ({ preview, title, description, date }) => (
  <Figure>
    <PreviewContainer>
      <Preview src={preview} />
    </PreviewContainer>
    <Title>{title}</Title>
    <Date>{format(date)}</Date>
    <Description>{description}</Description>
  </Figure>
);
