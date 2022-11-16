import { useContext } from "react";
import {
  ColorModeContext,
  ColorModeContextProps,
} from "../contexts/ColorModeContext";

export function useColorMode(): ColorModeContextProps {
  const context = useContext(ColorModeContext);

  return context;
}
