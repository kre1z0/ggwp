import styled from "styled-components";

import colors from "../../styles/colors";
import { OutsideLink } from "../../components/Semantic/Link";

export const Table = styled.table`
  line-height: 1.4;
  border-spacing: 4px;
`;

export const Td = styled.td.attrs(({ cellWidth }) => ({
  style: {
    width: `${cellWidth}%`,
  },
}))`
  padding: 4px 0 20px 4px;
  vertical-align: top;
  text-align: left;
`;

export const Th = styled(Td)`
  text-align: center;
  padding: 8px 12px;
  border: none;
  color: #fff;
  background-color: ${colors.green};
  font-size: 16px;
`;

export const Link = styled(OutsideLink)``;
