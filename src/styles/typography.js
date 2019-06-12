import { css } from "styled-components";

import color from "./colors";

const typography = css`
  h1,
  h2 {
  }
  h1 {
  }

  h2 {
  }
  ul {
    li {
      font-size: 18px;
      margin-bottom: 1em;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      padding-left: 28px;
      li {
        font-size: 14px;
      }
    }
  }
  em {
    font-size: 18px;
  }
  p {
    line-height: 1.5;
    font-size: 16px;
    margin: 20px 0;
    @media (max-width: 991px) {
      line-height: 1.4;
      font-size: 14px;
      margin: 15px 0;
    }
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
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace !important;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding: 4px 8px;
    background-color: #f8f8f8;
  }
`;

export default typography;
