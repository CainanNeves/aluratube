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
    if (mode === "dark") {
      localStorage.theme = "light";
      setMode("light");
    } else if (mode === "light") {
      localStorage.theme = "dark";
      setMode("dark");
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
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
