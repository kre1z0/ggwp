import styled from "styled-components";

import { SimpleTable } from "../components/SimpleTable";
import { Field as FieldUI } from "../components/Field";
import { Name as FieldName } from "../components/Field/styled";
import { Row } from "../components/NoSemantic/Row";
import { Tags as TagsUI } from "../components/Tags";

export const Container = styled(Row)`
  margin: 44px auto 100px auto;
`;

export const Tags = styled(TagsUI)`
  margin-top: 24px;
`;

export const Block = styled.div`
  display: flex;
`;

export const Photo = styled.img`
  width: 244px;
  height: 244px;
  border-radius: 4px;
  margin-right: 24px;
`;

export const Name = styled.h1`
  margin-top: 0;
`;

export const ContactLink = styled.a`
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  transition: color 200ms ease;
  text-decoration: none;
  font-weight: 600;
  color: inherit;
  margin-bottom: 10px;
  @media (hover: hover) {
    &:hover:not(.selected) {
      text-decoration: underline;
      color: #90c53d;
    }
  }
  svg {
    margin-right: 8px;
  }
`;

export const Fields = styled.div`
  flex-grow: 1;
`;

export const Field = styled(FieldUI)`
  margin-bottom: 14px;
  ${FieldName} {
    width: 24%;
  }
`;

export const Table = styled(SimpleTable)`
  margin-top: 20px;
`;
