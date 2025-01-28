import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";

interface WindowSize { width: number; height: number }

interface Children {
  children?: ReactNode;
}

export const WindowSizeContext = createContext<WindowSize | undefined>(undefined);

export const WindowSizeProvider = ({ children }: Children): ReactElement => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  
  
  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  )
};