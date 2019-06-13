import styled from "styled-components";

import { OutsideLink } from "../../components/Semantic/Link";

export const Table = styled.table``;

export const Td = styled.td.attrs(({ cellWidth }) => ({
  style: {
    width: `${cellWidth}%`,
  },
}))`
  vertical-align: top;
  padding: 4px 8px 4px 0;
  text-align: left;
`;

export const Th = styled(Td)`
  font-size: 16px;
`;

export const Link = styled(OutsideLink)``;
