import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import color from "../../styles/colors";

export const Link = styled(GatsbyLink)`
  color: ${color.dark};
  text-decoration: none;
  font-weight: 600;
`;

export const OutsideLink = styled.a.attrs({
  target: "_blank",
})`
  color: ${color.blue};
  text-decoration: none;
  font-weight: 600;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
