//hooks
import { useState } from "react";

//nextjs tags
import Image from "next/image";
import Link from "next/link";

//data from productsPage.json
import productPage from "./productsPage.json";

export default function YouMightLike() {
  const [hoverState, setHoverState] = useState({});
  const [clickState, setClickState] = useState({});

  const handleClick = (productId) => {
    setClickState((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleMouseEnter = (productId) => {
    setHoverState((prev) => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    setHoverState((prev) => ({ ...prev, [productId]: false }));
  };

  return (
    <div className="bg-white border-t border-[#ccc]">
      <div className="pt-6 px-4 text-lg tracking-wide max-w-[960px] mx-auto">
        <h3 className="uppercase font-bold">you might also like</h3>
        <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-6">
          {productPage.youMightAlsoLike.map((product) => {
            const { productId, productImg, brandName, price, href } = product;
            return (
              <li key={productId} className="relative mt-2">
                <Link href={href} className="">
                  <div className="relative">
                    <Image
                      src={productImg}
                      alt="product_img"
                      width={1000}
                      height={1000}
                      className="w-full"
                    />
                  </div>
                  <div className="tracking-wide mt-1">
                    <p className="text-[#666666] font-bold text-sm ">
                      &#163;{price}.00
                    </p>
                    <p className="text-[#2D2D2D] text-xs mt-1">{brandName}</p>
                  </div>
                </Link>
                <div
                  className="absolute bottom-12 right-0 flex justify-center items-center w-[36px] h-[36px] bg-white bg-opacity-70 rounded-full mb-2 mr-2"
                  onMouseEnter={() => handleMouseEnter(productId)}
                  onMouseLeave={() => handleMouseLeave(productId)}
                  onClick={() => handleClick(productId)}
                >
                  <Image
                    src={
                      hoverState[productId] || clickState[productId]
                        ? "/svgIcons/filledHeart.svg"
                        : "/svgIcons/outlineHeart.svg"
                    }
                    width={1000}
                    height={1000}
                    alt="heart_icon"
                    className="w-[18px] h-[18px]"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
