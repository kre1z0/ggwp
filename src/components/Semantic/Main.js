import styled from "styled-components";

import { navbarHeight } from "../../components/Navbar/styled";

export const Main = styled.main`
  display: flex;
  width: 100%;
  margin: auto 0;
  height: ${({ fullHeight }) => (fullHeight ? `calc(100% - ${navbarHeight})` : "auto")};
`;
