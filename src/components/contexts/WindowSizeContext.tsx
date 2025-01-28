"use client"
import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";

interface WindowSize { screenWidth: number; screenHeight: number }

interface Children {
  children?: ReactNode;
}

export const WindowSizeContext = createContext<WindowSize>({ screenWidth: 0, screenHeight: 0 });

export const WindowSizeProvider = ({ children }: Children): ReactElement => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ screenWidth: 0, screenHeight: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
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