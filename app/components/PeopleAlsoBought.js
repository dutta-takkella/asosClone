//hooks
import { useState } from "react";
//embla carousel
import useEmblaCarousel from "embla-carousel-react";

//data
import productsPage from "./productsPage.json";

//icons
import outlineHeart from "../../public/svgIcons/outlineHeart.svg";
import filledHeart from "../../public/svgIcons/filledHeart.svg";

//nextjs tag
import Image from "next/image";
import Link from "next/link";

export default function PeopleAlsoBought() {
  const [wishListHover, setWishListHover] = useState({});
  const [wishListClick, setWishListClick] = useState({});

  const handleClick = (productId) => {
    setWishListClick((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleMouseEnter = (productId) => {
    setWishListHover((prev) => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    setWishListHover((prev) => ({ ...prev, [productId]: false }));
  };

  return (
    <div className="w-full bg-white">
      <div className="pt-6 px-4 text-lg tracking-wide max-w-[960px] mr-0 md:mx-auto">
        <h3 className="uppercase font-bold">People also bought</h3>
        <div>
          <ul className="px-1 mt-6 mb-7 flex flex-row  overflow-scroll no-scrollbar">
            {productsPage.peopleAlsoBought.map((product) => {
              const { productId, productName, price, heroImg, href } = product;
              return (
                <li key={productId} className="mr-4 relative">
                  <Link href={href}>
                    <div className="relative w-[162px]">
                      <Image
                        src={heroImg}
                        alt="alt_img"
                        width={1000}
                        height={1000}
                        className="w-full h-[206px]"
                      />
                    </div>
                    <div className=" mt-3">
                      <div className="text-xs tracking-wide font-semibold leading-5 overflow-clip">
                        <p className="tracking-wider  line-clamp-2">
                          {productName}
                        </p>
                      </div>
                      <p
                        id="productPrice"
                        className="text-[#666666] font-bold text-sm mt-2 tracking-widest"
                      >
                        {product.price % 1 === 0 ? (
                          <span>&#163;{product.price}.00</span>
                        ) : (
                          <span>&#163;{product.price}</span>
                        )}
                      </p>
                    </div>
                  </Link>
                  <div
                    className="absolute bottom-24 right-2 w-[36px] h-[35px] bg-white bg-opacity-70 rounded-full flex justify-center items-center"
                    onClick={() => handleClick(productId)}
                    onMouseLeave={() => handleMouseLeave(productId)}
                    onMouseEnter={() => handleMouseEnter(productId)}
                  >
                    <Image
                      src={
                        wishListClick[productId] || wishListHover[productId]
                          ? filledHeart
                          : outlineHeart
                      }
                      alt="alt_img"
                      width={1000}
                      height={1000}
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
