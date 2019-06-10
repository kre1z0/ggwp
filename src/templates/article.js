import React from "react";

import { format } from "../utils/date";
import { Title, Container, Date } from "../styles/article";

export const Article = ({ title, date }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{format(date)}</Date>
    </Container>
  );
};
