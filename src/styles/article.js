import styled from "styled-components";

import { Row } from "../components/NoSemantic/Row";

export const Title = styled.h1`
  margin: 25px 0 15px 0;
`;

export const Container = styled(Row)``;

export const Date = styled.div`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
`;

export const Body = styled.article``;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  border-radius: 1px;
  font-weight: 600;
  padding: 4px 8px;
  color: #fff;
  margin: 0 10px 10px 0;
  &:last-of-type {
    margin-right: 0;
  }
  &:nth-of-type(10n - 9) {
    background-color: #c255d6;
  }
  &:nth-of-type(10n - 8) {
    background-color: #4b39c3;
  }
  &:nth-of-type(10n - 7) {
    background-color: #95da49;
  }
  &:nth-of-type(10n - 6) {
    background-color: #eeaf47;
  }
  &:nth-of-type(10n - 5) {
    background-color: #61dafb;
  }
  &:nth-of-type(10n - 4) {
    background-color: #1b64b9;
  }
  &:nth-of-type(10n - 3) {
    background-color: #4794a4;
  }
  &:nth-of-type(10n - 2) {
    background-color: #ffcf4f;
  }
  &:nth-of-type(10n - 1) {
    background-color: #387b4f;
  }
  &:nth-of-type(10n) {
    background-color: #ff7c48;
  }
`;
