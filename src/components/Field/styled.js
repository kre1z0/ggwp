import styled from "styled-components";

import { OutsideLink } from "../../components/Semantic/Link";

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

export const Link = styled(OutsideLink)`
  width: 60%;
`;