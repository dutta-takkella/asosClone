//data from data.js
// import { featured } from "./data.js";
import landingPage from "./landingPage.json";

//for using Image tag
import Image from "next/image";

export default function Featured() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-10 justify-evenly w-screen max-w-full px-8 z-1">
      {landingPage.featured.map((feature) => {
        const { id, href, img, alt, h2, p } = feature;
        return (
          <li key={id} className="w-20/100">
            <a href={href}>
              <div className="flexClass-col">
                <Image
                  src={img}
                  alt={alt}
                  width={299}
                  height={382}
                  className="w-full h-full"
                />
                <h2 className="flexClass-row font-bold mt-4  md:text-base lg:text-lg tracking-wide">
                  {h2}
                </h2>
                <p className="flexClass-row mt-2 tracking-wide  md:text-sm lg:text-base">
                  {p}
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
