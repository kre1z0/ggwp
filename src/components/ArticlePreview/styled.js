import styled, { keyframes } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

import { Arrow as ArrowUI } from "../../components/Icons/Arrow";
import { containerWidth } from "../../styles/breakpoints";

const jump = keyframes`
  0% { top: 50%; }
  50% { top: calc(50% - 24px); }
  100% { top: 50%; }
`;

export const Date = styled.div`
  font-weight: 600;
  margin-top: 4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Arrow = styled(ArrowUI)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-140%, -50%) rotate(90deg);
`;

export const PreviewContainer = styled.div`
  position: relative;
`;

export const Preview = styled.img`
  z-index: 1;
  position: relative;
  width: 100%;
  height: auto;
  transition: transform 400ms;
  transform-origin: 0 50%;
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
      ${Preview} {
        transform: perspective(calc(${containerWidth} / 2)) rotateY(14deg);
      }
      ${Title} {
        text-decoration: underline;
      }
      ${Arrow} {
        animation: ${jump} 800ms ease-in-out infinite;
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
