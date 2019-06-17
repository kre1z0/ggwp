import styled from "styled-components";

import { containerWidth } from "../../styles/breakpoints";

export const Row = styled.div`
  max-width: ${containerWidth};
  width: 100%;
  margin: 0 auto;
  @media (max-width: 930px) {
    padding: 0 15px;
  }
`;
