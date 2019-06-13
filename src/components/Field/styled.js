import styled from "styled-components";

import colors from "../../styles/colors";

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  margin-left: ${({ withIcon }) => (withIcon ? "10px" : "")};
  width: 40%;
  font-weight: 600;
`;

export const Value = styled.div`
  width: 60%;
`;

export const Link = styled(Value)`
  text-decoration: none;
  color: ${colors.blue};
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
