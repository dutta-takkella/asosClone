//for using Image tag
import Image from "next/image";

//data
import landingPage from "./landingPage.json";

import Link from "next/link";

export default function Moments() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-0 my-8 w-full px-0 md:px-[84px]">
      {landingPage.moments.map((moment) => {
        const { id, href, img, alt, h2, p, btnText } = moment;
        return (
          <li
            key={id}
            className="flex flex-col justify-center align-middle items-center mx-4 md:mx-6 py-3"
          >
            <Link href={href} className="w-full">
              <div className="flex flex-col w-full">
                <Image
                  src={img}
                  alt={alt}
                  width={700}
                  height={801}
                  className=""
                />
                <h2 className="font-bold md:text-[26px] tracking-wider flex justify-center align-middle items-center mt-3">
                  {h2}
                </h2>
                <p className="flex justify-center align-middle items-center mt-2">
                  {p}
                </p>
                <button className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 px-9 py-4 mx-auto mb-2 mt-5 font-bold text-[15px] tracking-[3px]">
                  {btnText}
                </button>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
