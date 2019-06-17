import { css } from "styled-components";

import alert from "../assets/img/alert.svg";
import color from "./colors";

const typography = css`
  ul {
    li {
      font-size: 18px;
      margin-bottom: 1em;
    }
  }

  em {
    font-size: 18px;
  }

  p {
    line-height: 1.5;
    font-size: 16px;
    margin: 20px 0;
  }

  hr {
    border: none;
    text-align: left;
    width: 160px;
    height: 8px;
    margin: 0 0 10px 0;
    background: ${color.green};
  }

  code {
    display: inline-block;
    white-space: pre-wrap;
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace !important;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 4px 8px;
    background-color: #f8f8f8;
  }

  mark {
    border-radius: 4px;
    text-indent: 32px;
    position: relative;
    padding: 6px 8px 6px 8px;
    display: inline-block;
    background-color: #ffd041;
    &:before {
      position: absolute;
      top: 6px;
      left: 8px;
      display: inline-block;
      width: 24px;
      height: 24px;
      content: "";
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${alert});
    }
  }

  a {
    color: ${color.blue};
    text-decoration: none;
    font-weight: 600;
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default typography;
