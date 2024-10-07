//state hooks
import { useState } from "react";

//for image tag in nextjs
import Image from "next/image";

//data from dataJ.json
import landingPage from "./landingPage.json";

export default function TrendingBrands() {
  const [brandFocus, setBrandFocus] = useState(0);
  const [trendingBrandsHover, setTrendingBrandsHover] = useState(false);

  return (
    <div className="flex flex-col py-6 border border-[#cdcccc]">
      <h3 className="uppercase font-bold text-2xl flexClass-row">
        trending brands
      </h3>
      <div
        className="relative"
        onMouseEnter={() => setTrendingBrandsHover(true)}
        onMouseLeave={() => setTrendingBrandsHover(false)}
      >
        {trendingBrandsHover && (
          <div
            id="hoverEffect"
            className="absolute top-0 bottom-0 right-0 left-0 bg-white opacity-50 pointer-events-none"
          ></div>
        )}
        <ul className="grid-cols-2 md:flex md:align-middle md:items-center md:justify-center md:flex-wrap lg:flex-nowrap py-6">
          {landingPage.trendingBrands.map((trendingBrand) => {
            const { id, href, img, height, alt } = trendingBrand;
            return (
              <li
                key={id}
                onMouseEnter={() => setBrandFocus(id)}
                onMouseLeave={() => setBrandFocus(0)}
                className={`${brandFocus === id && "z-10"} px-3`}
              >
                <a href={href}>
                  <Image src={img} width={180} height={height} alt={alt} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
