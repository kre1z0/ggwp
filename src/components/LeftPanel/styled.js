import React from "react";
import styled, { css } from "styled-components";

import { IconButton } from "../../components/Buttons/IconButton";
import { Swiper } from "../../components/Swiper";

export const LeftPanelWidth = "400px";

const Line = css`
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 6px;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
`;

export const LeftPanelContainer = styled(props => <Swiper {...props} />).attrs(
  ({ deltaX, transition }) => ({
    style: {
      left: `-${deltaX}px`,
      transition: transition ? "left 400ms ease" : "none",
    },
  }),
)`
  width: ${LeftPanelWidth};
  padding: 50px 0 15px 15px;
  box-shadow: 0 0 12px 0 rgba(10, 18, 33, 0.1);
  cursor: default;
  z-index: 999;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  ${({ isMobile }) => isMobile && Line}
`;

export const ScrolledContent = styled.div`
  overflow-y: auto;
  overflow-y: overlay;
  -webkit-overflow-scrolling: touch;
  height: calc(100% - 54px);
`;

export const Flag = styled.img`
  position: absolute;
  left: 15px;
  top: 15px;
  width: auto;
  height: 44px;
  box-shadow: 0 6px 6px 0 rgba(10, 18, 33, 0.2);
`;

export const CloseBtn = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
