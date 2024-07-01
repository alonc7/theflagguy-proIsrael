import { createContext, useEffect, useState } from "react";

export const screenSizeContext = createContext({});

const getScreenSize = ({ height, width }) => {
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  return "xs";
};

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(() =>
    getScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(
        getScreenSize({ height: window.innerHeight, width: window.innerWidth })
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSize = (sizeType) => {
    switch (screenSize) {
      case "xs":
        return sizeType === "height" ? "65vh" : "100%";
      case "sm":
        return sizeType === "height" ? "50vh" : "100%";
      case "md":
        return sizeType === "height" ? "40vh" : "100%";
      case "lg":
        return sizeType === "height" ? "30vh" : "100%";
      case "xl":
        return sizeType === "height" ? "20vh" : "100%";
      default:
        return "100%";
    }
  };
  const mobileStyle = {
    maxWidth: "95%",
    margin: "6px",
  };
  const getHeight = () => getSize("height");
  const getWidth = () => getSize("width");

  return (
    <screenSizeContext.Provider
      value={{ screenSize, getHeight, getWidth, mobileStyle }}
    >
      {children}
    </screenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
