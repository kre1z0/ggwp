import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

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
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0 0 0;
`;

export const Link = styled(GatsbyLink)`
  display: block;
  text-decoration: none;
  color: inherit;
  @media (hover: hover) {
    &:hover {
      text-decoration: none;
      ${Title} {
        text-decoration: underline;
      }
    }
  }
`;

export const Tags = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin: 0 4px 4px 0;
`;
