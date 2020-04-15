import styled, { css } from "styled-components";

import colors from "../../styles/colors";

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const active = css`
  cursor: pointer;
`;

const disabledStyle = css`
  transform: scale(1.4);
  border: 1px solid ${colors.dark};
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.24);
`;

export const Tag = styled.div`
  border-radius: 1px;
  font-weight: 600;
  padding: 4px 8px;
  color: #fff;
  margin: 0 10px 10px 0;
  transition: all 200ms ease;
  border: 1px solid transparent;
  ${({ onClick }) => onClick && active}
  ${({ disabled }) => disabled && disabledStyle}
  :hover {
    z-index: 999;
  }
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
    background-color: #7fbf44;
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
