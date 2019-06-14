import styled from "styled-components";
import { Link } from "gatsby";

import color from "../../styles/colors";
import { Link as GatsbyLink } from "../../components/Semantic/Link";

export const navbarHeight = "44px";

export const activeStyle = {
  color: color.green,
  cursor: "default",
};

export const Nav = styled.nav`
  z-index: 999;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navbarHeight};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
`;

export const Home = styled(Link)`
  margin: 0 15px;
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 200ms ease;
  @media (hover: hover) {
    &:hover {
      color: #90c53d;
    }
  }
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

export const DefaultLink = styled(GatsbyLink)`
  transition: all 200ms ease;
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
      color: #90c53d;
    }
  }
`;
