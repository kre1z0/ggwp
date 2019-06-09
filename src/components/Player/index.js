import React from "react";

import { Iframe } from "./styled";

export const Player = () => {
  return (
    <Iframe
      // title={url}
      src="https://www.youtube-nocookie.com/embed/PwHerXOV_Ag?autoplay=1"
      allowFullScreen="allowFullScreen"
    />
  );
};
