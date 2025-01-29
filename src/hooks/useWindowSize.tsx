"use client"

import { useContext } from "react";
import { WindowSizeContext } from "../contexts/WindowSizeContext";

export default function useWindowSize() {
  const context = useContext(WindowSizeContext);

  if(context === undefined) throw new Error("useWindowSize must be used within a WindowSizeProvider");

  return context
}