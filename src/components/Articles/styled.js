import styled, { css } from "styled-components";

import { Row } from "../../components/NoSemantic/Row";

export const Container = styled(Row)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const fullWidth = css`
  width: 100%;
  padding: 0;
`;

export const ColumnsContainer = styled.div`
  display: flex;
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
    &:first-of-type {
      padding-right: 0;
    }
    &:last-of-type {
      padding-left: 0;
    }
  }
`;
