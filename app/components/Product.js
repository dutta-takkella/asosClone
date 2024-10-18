//hooks
import { useState, useEffect, useCallback } from "react";

//components
import ProductDetails from "./ProductDetails.js";
import ProductImageSection from "./ProductImageSection.js";

//data
import productsPage from "./productsPage.json";

//nextjs tags
import Image from "next/image";
import Link from "next/link";

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
import SizingOptions from "./SizingOptions.js";

export default function Product() {
  const [wishListed, setWishListed] = useState(false);
  const [shippingRestrictions, setShippingRestrictions] = useState(false);
  const product = productsPage.products[0];
  const [isShare, setIsShare] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[960px] mx-auto md:grid md:grid-cols-[2fr_1fr] gap-6">
        {/* image section */}
        <ProductImageSection prop={product} />

        {/* product text section */}
        <div className="bg-white">
          {/* product name and sharing options */}
          <div
            id="productDetails"
            className="px-2 flex justify-between relative w-full mt-4 tracking-wide"
          >
            <p id="productName" className="w-10/12">
              {product.productName}
            </p>
            <div className="relative">
              <button
                onClick={() => setIsShare((prev) => !prev)}
                onBlur={() => setIsShare(false)}
              >
                <Image
                  src={share}
                  alt="alt_img"
                  width={1000}
                  height={1000}
                  className="w-[17px]"
                />
                <div
                  className={`absolute top-full left-0 bg-white shadow-2xl w-[132px] h-[68px] flex justify-around items-center shadow-slate-400 ${
                    isShare ? "" : "hidden"
                  }`}
                >
                  {[
                    {
                      src: shareFacebook,
                      alt: "Facebook",
                      href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.asos.com%2Ftopman%2Ftopman-long-sleeve-oversized-stripe-shirt-in-burgundy%2Fprd%2F206484835%23ctaref-product_share_facebook",
                    },
                    {
                      src: sharePinterest,
                      alt: "Pinterest",
                      href: "https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.asos.com%2Ftopman%2Ftopman-long-sleeve-oversized-stripe-shirt-in-burgundy%2Fprd%2F206484835%23ctaref-product_share_pinterest&media=https%3A%2F%2Fimages.asos-media.com%2Fproducts%2Ftopman-long-sleeve-oversized-stripe-shirt-in-burgundy%2F206484835-1-brown&description=Topman%20long%20sleeve%20oversized%20stripe%20shirt%20in%20burgundy",
                    },
                  ].map((item, index) => (
                    <Link key={index}>
                      <Image
                        src={item.src}
                        width={44}
                        height={44}
                        alt={item.alt}
                      />
                    </Link>
                  ))}
                </div>
              </button>
            </div>
          </div>

          {/* product price */}
          <p
            id="productPrice"
            className="text-[#666666] font-bold text-lg mt-2 tracking-wider px-2"
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
            className="text-xs mt-5 font-bold tracking-widest px-2"
          >
            COLOUR:{" "}
            <span className=" p-1 uppercase font-normal text-base tracking-wide">
              {product.color}
            </span>
          </p>

          {/* sizing options */}
          <div className="px-2">
            <SizingOptions product={product} />
          </div>

          {/* add to cart/wishlist */}
          <div className="grid grid-cols-[1fr_44px] gap-3 mt-5 px-2 ">
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
          <div className="w-full px-2">
            <div className="w-full border border-[#e8e8e8] mt-5 px-3">
              <div className="border-b border-[#efeeee] flex flex-row text-xs py-3 font-medium tracking-wider">
                <Image
                  src={deliveryTruck}
                  height={1000}
                  width={1000}
                  alt="alt_img"
                  className="w-[24px] h-[16px]"
                />
                <div className="px-2">
                  <p>Free delivery on qualifying orders.</p>
                  <div className="flex flex-row mt-5 mb-2">
                    <p className="underline inline">
                      View our Delivery & Returns Policy
                      <Image
                        src={copy}
                        alt="alt_img"
                        className="w-[10px] h-[10px] mx-1 inline"
                      />
                    </p>
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
          {/* product details */}
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}
