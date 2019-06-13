import React from "react";

import { FieldContainer, Name, Value, Link } from "./styled";

export const Field = React.memo(({ name, value, className, Icon }) => {
  const trimedUrl = value.trim();
  const isHttp = trimedUrl.startsWith("http");

  return (
    <FieldContainer className={className}>
      {Icon && <Icon />}
      <Name withIcon={Icon}>{name}</Name>
      {isHttp ? (
        <Link as="a" href={trimedUrl} target="_blank">
          {trimedUrl.replace(/^(https?:\/\/)?(www?\.)?/, "")}
        </Link>
      ) : (
        <Value>{value}</Value>
      )}
    </FieldContainer>
  );
});
