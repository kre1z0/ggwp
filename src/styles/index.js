import styled from "styled-components";

import { Row } from "../components/NoSemantic/Row";

export const Aside = styled.aside`
  padding: 0 10px;
  width: 20vw;
`;

export const LeftSide = styled(Aside)``;

export const CenterSide = styled(Row)`
  width: 60vw;
`;

export const RightSide = styled(Aside)``;

export const UnorderedList = styled.ul`
  cursor: pointer;
  margin: 0;
  padding: 0;
`;
