import React from "react";

import { FieldContainer, Name, Value, Link } from "./styled";

const getElement = value => {
  const trimedUrl = value.trim();
  const isHttp = trimedUrl.startsWith("http");

  if (typeof value === "string" || value instanceof String) {
    if (isHttp) {
      return <Link href={trimedUrl}>{trimedUrl.replace(/^(https?:\/\/)?(www?\.)?/, "")}</Link>;
    } else {
      return <Value>{value}</Value>;
    }
  } else {
    return value;
  }
};

export const Field = React.memo(({ name, value, className, Icon }) => (
  <FieldContainer className={className}>
    {Icon && <Icon />}
    <Name withIcon={Icon}>{name}</Name>
    {getElement(value)}
  </FieldContainer>
));
