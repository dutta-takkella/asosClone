//nextjs tags
import Image from "next/image";

//icons
import arrowUp from "../../public/svgIcons/arrowUp.svg";

export default function Btt() {
  return (
    <div className="bg-[#F8F8F8] flex flex-row justify-center items-center h-[60px] md:hidden">
      <Image src={arrowUp} alt="alt_img" className="mx-1 w-[15px] h-[20px]" />
      <p className="mx-1 uppercase font-bold tracking-wider text-sm">
        back to top
      </p>
    </div>
  );
}
