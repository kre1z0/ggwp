import React from "react";

import { TagsList, Tag } from "./styled";

export const Tags = ({ tags, className }) => {
  return (
    <TagsList className={className}>
      {tags.map((tag, index) => (
        <Tag key={`${tag}-${index + 1}`}>{tag}</Tag>
      ))}
    </TagsList>
  );
};
