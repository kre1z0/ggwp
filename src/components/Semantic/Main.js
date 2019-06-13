import styled from "styled-components";

import { navbarHeight } from "../../components/Navbar/styled";

export const Main = styled.main`
  display: flex;
  width: 100%;
  margin: ${navbarHeight} 0 0 0;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
`;
