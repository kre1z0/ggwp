import styled, { css } from "styled-components";

import colors from "../../../styles/colors";

export const Nav = styled.nav`
  margin: 0 auto 44px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    &:first-child {
      margin-right: 1rem;
    }
    &:last-child {
      margin-left: 1rem;
    }
  }
  @media (max-width: 991px) {
    margin-bottom: 5.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 3.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`;

const selectedCss = css`
  transition: none;
  cursor: default;
  color: #fff;
  background-color: #90c53d;
  border-radius: 50%;
  @media (hover: hover) {
    &:hover {
      color: #fff;
    }
  }
`;

export const Page = styled.a`
  color: ${colors.dark};
  position: relative;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  min-width: 2.2857rem;
  height: 2.2857rem;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
      transition: color 200ms ease-in;
      color: #90c53d;
    }
  }
  ${({ selected }) => selected && selectedCss};
`;
