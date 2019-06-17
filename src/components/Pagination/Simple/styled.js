import styled from "styled-components";

import { Button } from "../../../components/Buttons/Button";

export const Container = styled.nav`
  display: none;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    display: flex;
    margin: 0 auto 40px auto;
    > span {
      width: 3.4rem;
      color: #000;
      font-size: 1rem;
      font-weight: 600;
    }
    svg {
      height: 0.9rem;
      path {
        fill: rgba(38, 44, 55, 1);
        stroke: rgba(38, 44, 55, 1);
      }
    }
    button {
      &:first-child {
        margin-right: 1rem;
      }
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
`;

const ControlBtn = styled(Button)`
  display: flex;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
  background: none;
  svg {
    width: 100%;
    height: 0.7rem;
    path {
      transition: all 200ms ease-in;
      fill: rgba(38, 44, 55, 0.35);
      stroke: rgba(38, 44, 55, 0.35);
    }
  }

  &.dark {
    svg {
      height: 0.9rem;
      path {
        fill: rgba(38, 44, 55, 1);
        stroke: rgba(38, 44, 55, 1);
      }
    }
    @media (hover: hover) {
      &:hover {
        svg {
          path {
            fill: #90c53d;
            stroke: #90c53d;
          }
        }
      }
    }
  }

  &.disabled {
    pointer-events: none;
    cursor: default;
    svg {
      path {
        fill: rgba(38, 44, 55, 0.15);
        stroke: rgba(38, 44, 55, 0.15);
      }
    }
  }
`;

export const PrevBtn = styled(ControlBtn)`
  transform: rotate(180deg);
`;

export const NextBtn = styled(ControlBtn)``;

export const Amount = styled("span")`
  white-space: nowrap;
  text-align: center;
  display: block;
  width: 3.6428rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: rgba(38, 44, 55, 0.35);
  font-size: 0.8571rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: 2.5714rem;
    font-size: 0.7142rem;
  }
`;
