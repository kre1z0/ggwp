import React from "react";

import { TagsList, Tag } from "./styled";

export const Tags = ({ tags, className, disabledTag, onClick }) => {
  return (
    <TagsList className={className}>
      {tags.map((tag, index) => (
        <Tag
          disabled={disabledTag === tag}
          key={`${tag}-${index + 1}`}
          onClick={onClick ? () => onClick(tag) : void 0}
        >
          {tag}
        </Tag>
      ))}
    </TagsList>
  );
};
