//importing Image tag
import Image from "next/image";

//data
import landingPage from "./landingPage.json";

export default function Hero() {
  const { id, title, fullSize, halfSize, bgColor, textColor } =
    landingPage.heroData[0];
  return (
    <div key={id} className="relative flex justify-center md:mx-8 md:mt-6 mt-3">
      <Image
        src={fullSize.img}
        alt="alt_img"
        width={10000}
        height={10000}
        className="hidden md:flex md:relative w-full"
      />
      <Image
        src={halfSize.img}
        alt="alt_img"
        width={10000}
        height={10000}
        className="relative md:hidden w-full"
      />
      <h3
        className={`text-2xl w-[53%] text-center absolute bottom-0 left-1/2 -translate-x-1/2 mb-24 bg-${bgColor} text-${textColor} font-semibold md:w-[480px] md:text-xs lg:text-4xl lg:font-bold lg:py-1 align-middle justify-center`}
      >
        {title}
      </h3>
    </div>
  );
}

//
