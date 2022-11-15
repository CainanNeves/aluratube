import { createContext, Dispatch, useEffect, useState } from "react";

export interface ColorModeContextProps {
  mode: string;
  setMode: Dispatch<any>;
  toggleMode: () => void;
}

export const ColorModeContext = createContext({} as ColorModeContextProps);

export function ColorModeContextProvider({ children, ...props }) {
  const [mode, setMode] = useState("");

  function toggleMode() {
    if (mode === "dark") setMode("light");
    else if (mode === "light") setMode("dark");
  }

  useEffect(() => {
    if (mode === "")
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        setMode("dark");
      else setMode("light");
  }),
    [];

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
