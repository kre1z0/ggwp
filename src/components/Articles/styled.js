import React from "react";
import styled, { css } from "styled-components";

import { PaginationFull as PaginationFullUI } from "../../components/Pagination/Full/PaginationFull";
import { PaginationSimple as PaginationSimpleUI } from "../../components/Pagination/Simple/PaginationSimple";
import { Row } from "../../components/NoSemantic/Row";

export const Container = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

const fullWidth = css`
  width: 100%;
  padding: 0;
`;

export const Column = styled.div`
  width: 50%;
  margin: 0 0 40px 0;
  &:first-of-type {
    padding-right: 10px;
  }
  &:last-of-type {
    padding-left: 10px;
  }
  ${({ oneColumn }) => oneColumn && fullWidth};
  @media (max-width: 991px) {
    margin: 0 0 20px 0;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin: 0 0 10px 0;
  }
`;

export const PaginationFull = styled(props => <PaginationFullUI {...props} />)`
  @media (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`;

export const PaginationSimple = styled(props => <PaginationSimpleUI {...props} />)`
  display: none;
  @media (max-width: 767px) and (orientation: portrait) {
    display: flex;
    transform: none;
    position: static;
    left: auto;
    bottom: auto;
    margin-bottom: 3rem;
    > span {
      width: 3.4rem;
      color: #000;
      font-size: 1rem;
      font-weight: 600;
    }
    svg {
      height: 0.9rem;
      path {
        fill: rgba(38, 44, 55, 1);
        stroke: rgba(38, 44, 55, 1);
      }
    }
    button {
      &:first-child {
        margin-right: 1rem;
      }
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
`;
