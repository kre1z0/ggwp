import Bowser from "bowser";

export const browser = () => {
  return Bowser.getParser(window.navigator.userAgent);
};

export const isMobile = () => {
  if (typeof window === "object") {
    const { parsedResult } = browser();
    const {
      platform: { type },
    } = parsedResult;

    return type === "mobile";
  } else {
    return null;
  }
};

export const isTablet = () => {
  if (typeof window === "object") {
    const { parsedResult } = browser();
    const {
      platform: { type },
    } = parsedResult;

    return type === "tablet";
  } else {
    return null;
  }
};
