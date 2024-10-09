//hooks
import { useState, useEffect } from "react";

//data
import productsPage from "./productsPage.json";

//nextjs tags
import Image from "next/image";

//icons
import share from "../../public/svgIcons/share.svg";
import shareFacebook from "../../public/svgIcons/shareFacebook.svg";
import sharePinterest from "../../public/svgIcons/sharePinterest.svg";
import shareWhatsapp from "../../public/svgIcons/shareWhatsapp.svg";
import shareMail from "../../public/svgIcons/shareMail.svg";
import outlineHeart from "../../public/svgIcons/outlineHeart.svg";
import filledHeart from "../../public/svgIcons/filledHeart.svg";
import copy from "../../public/svgIcons/copy.svg";
import deliveryTruck from "../../public/svgIcons/deliveryTruck.svg";
import whiteHeart from "../../public/svgIcons/whiteHeart.svg";
import magnify from "../../public/svgIcons/magnify.svg";

export default function Product({ setCurrentProduct }) {
  const [wishListed, setWishListed] = useState(false);
  const [sizeFocused, setSizeFocused] = useState(false);
  const [shippingRestrictions, setShippingRestrictions] = useState(false);
  const product = productsPage.products[0];

  useEffect(() => {
    setCurrentProduct(product);
  }, []);

  return (
    <div className="md:px-3 w-full max-w-[960px] mx-auto">
      {/* product images */}
      <div className="w-full">
        <ul className="flex flex-row overflow-scroll w-full">
          <li className="relative">
            <Image
              src={product.productImgs[0]}
              alt="alt_img"
              width={1000}
              height={1000}
              className="w-full cursor-magnify"
            />
            <div className="absolute right-0 bottom-10 bg-black bg-opacity-80 w-[83px] h-[28px] flex flex-row items-center rounded-l-full">
              <span className="text-white text-xs tracking-widest font-extrabold pl-4">
                {product.wishListedTimes}
              </span>
              <Image
                src={whiteHeart}
                alt="alt_img"
                className="w-[31px] h-[16px]"
              />
            </div>
          </li>
        </ul>
      </div>

      {/* product name and sharing options */}
      <div
        id="productDetails"
        className="px-2 relative w-full mt-4 tracking-wide"
      >
        <p id="productName" className="w-10/12">
          {product.productName}
        </p>
        <div className="absolute top-0 right-3">
          <Image
            src={share}
            alt="alt_img"
            width={1000}
            height={1000}
            className="w-[17px]"
          />
        </div>

        {/* product price */}
        <p
          id="productPrice"
          className="text-[#666666] font-bold text-lg mt-2 tracking-wider"
        >
          {product.price % 1 === 0 ? (
            <span>&#163;{product.price}.00</span>
          ) : (
            <span>&#163;{product.price}</span>
          )}
        </p>

        {/* product color */}
        <p
          id="productColor"
          className="text-xs mt-5 font-bold tracking-widest "
        >
          COLOUR:{" "}
          <span className=" p-1 uppercase font-normal text-base tracking-wide">
            {product.color}
          </span>
        </p>

        {/* sizing options */}
        <div id="productSizing">
          <div className="flex flex-row justify-between mt-6">
            <p className="text-xs font-bold tracking-widest">SIZE:</p>
            <p className="underline text-xs font-semibold tracking-wider">
              Size Guide
            </p>
          </div>
          <select
            id="sizeOptions"
            name="options"
            onFocus={() => setSizeFocused(true)}
            onBlur={() => setSizeFocused(false)}
            className={`bg-white px-2 py-2 text-sm w-full border border-black mt-2  ${
              sizeFocused ? "shadow-sm shadow-[#0770cf]" : ""
            }`}
          >
            {productsPage.shirtSizes.map((sizeOption) => {
              const { sizeId, size, sizeDescription } = sizeOption;
              return (
                <option key={sizeId} value="size">
                  {size} - {sizeDescription}
                </option>
              );
            })}
          </select>

          {/* add to cart/wishlist */}
          <div className="grid grid-cols-[1fr_44px] gap-3 mt-5">
            <button className="uppercase font-bold text-white  bg-[#018849] py-1 max-w-[510px]">
              add to bag
            </button>
            <div className="flex justify-center items-center rounded-full bg-[#EEEEEE] w-[44px] h-[44px] mx-2s">
              <Image
                src={wishListed ? filledHeart : outlineHeart}
                alt="alt_img"
                height={1000}
                width={1000}
                onClick={() => setWishListed((prev) => !prev)}
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>

          {/* delivery options */}
          <div className="w-full border border-[#e8e8e8] mt-5 px-3">
            <div className="border-b border-[#efeeee] flex flex-row text-xs py-3 px-2 font-medium tracking-wider">
              <Image
                src={deliveryTruck}
                height={1000}
                width={1000}
                alt="alt_img"
                className="w-[24px] h-[16px] mx-2"
              />
              <div>
                <p>Free delivery on qualifying orders.</p>
                <div className="flex flex-row mt-5 mb-2">
                  <button className="underline inline p-0 m-0">
                    View our Delivery & Returns Policy
                    <Image
                      src={copy}
                      alt="alt_img"
                      className="w-[10px] h-[10px] mx-1 inline"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="border-[#efeeee] w-full h-[49px] flex items-center">
              <button
                className={`px-3 py-3 underline text-[0.7rem] w-full flex justify-start items-center ${
                  shippingRestrictions ? "shadow-sm shadow-[#0770cf]" : ""
                }`}
                onFocus={() => setShippingRestrictions(true)}
                onBlur={() => setShippingRestrictions(false)}
              >
                This product has shopping restrictions.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
