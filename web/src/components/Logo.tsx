import { FaYoutube } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="flex h-6 w-full max-w-[80px] font-bold text-textColorBase sm:max-w-[127px]">
      <FaYoutube color="red" className="h-full w-full p-0" />
      <span>NaniacTube</span>
    </div>
  );
}
