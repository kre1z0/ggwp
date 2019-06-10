import styled from "styled-components";
import { Link } from "gatsby";

import { Link as GatsbyLink } from "../../components/Semantic/Link";
import { Row } from "../../components/NoSemantic/Row";

export const navbarHeight = "64px";

export const Nav = styled.nav`
  height: ${navbarHeight};
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled(Row)`
  display: flex;
`;

export const Home = styled(Link)`
  pointer-events: auto;
  width: 144px;
  height: 100%;
  font-size: 24px;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  pointer-events: auto;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  margin: 0;
  &:last-of-type {
    padding-right: 0;
  }
`;

export const DefaultLink = styled(GatsbyLink)``;
