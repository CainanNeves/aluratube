import Image from "next/image";
import tubeImg from "../assets/tube.svg";

export default function Logo() {
  return (
    <div className="flex h-6 w-full max-w-[80px] font-bold text-textColorBase sm:max-w-[127px]">
      <Image src={tubeImg} alt="AluraTube" />
      <span>NaniacTube</span>
    </div>
  );
}
