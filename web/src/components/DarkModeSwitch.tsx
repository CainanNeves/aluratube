import { GiMoonBats, GiSun } from "react-icons/gi";
import { useColorMode } from "../hooks/useColorMode";

export default function DarkModeSwitch() {
  const { toggleMode } = useColorMode();

  return (
    <label className="relative flex h-8 w-14 justify-around rounded-full border-0 bg-[#333333] p-[3px] text-[12px]">
      {/* Input */}
      <input
        id="darkmode"
        className="peer hidden"
        type="checkbox"
        onChange={toggleMode}
      />

      {/* Bola */}
      <span className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-full" />

      {/* Back Line */}
      <label className="flex h-full w-14" htmlFor="darkmode">
        <span className="inline-flex h-full w-full items-center justify-center">
          <GiMoonBats color="white" size="20px" />
        </span>
        <span className="inline-flex h-full w-full items-center justify-center">
          <GiSun color="orange" size="20px" />
        </span>
      </label>
    </label>
  );
}
