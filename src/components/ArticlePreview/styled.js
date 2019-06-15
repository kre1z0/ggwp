import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const PreviewContainer = styled.div`
  overflow: hidden;
`;

export const Date = styled.div`
  font-weight: 600;
  margin-top: 4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Preview = styled.img`
  width: 100%;
  height: auto;
  transition: transform 200ms;
`;

export const Title = styled.h2`
  margin: 15px 0 0 0;
`;

export const Figure = styled.figure`
  cursor: pointer;
  width: 100%;
  margin: 0 0 25px 0;
  overflow: hidden;
  @media (hover: hover) {
    &:hover {
      ${Preview} {
        transform: scale(1.2);
      }
      ${Title} {
        text-decoration: underline;
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0 0 0;
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
    }
  }
`;
