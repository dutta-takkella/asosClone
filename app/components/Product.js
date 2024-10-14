//hooks
import { useState, useEffect, useCallback } from "react";

//components
import ProductDetails from "./ProductDetails.js";

//carousel
import useEmblaCarousel from "embla-carousel-react";

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
import whiteHeart from "../../public/svgIcons/whiteHeart.svg";
import clothesHanger from "../../public/svgIcons/clothesHanger.svg";
import toLeft from "../../public/svgIcons/toLeft.svg";
import toRight from "../../public/svgIcons/toRight.svg";

export default function Product({ setCurrentProduct }) {
  const [wishListed, setWishListed] = useState(false);
  const [sizeFocused, setSizeFocused] = useState(false);
  const [shippingRestrictions, setShippingRestrictions] = useState(false);
  const product = productsPage.products[0];
  const [zoomCount, setZoomCount] = useState(0);

  //for embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  //
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    setCurrentProduct(product);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[960px] mx-auto md:grid md:grid-cols-[2fr_1fr]">
        {/* image section */}
        <div className="md:px-3 w-full mx-auto bg-white md:grid md:grid-cols-[68px_1fr]">
          {/* image icons */}
          <div className="hidden md:block">
            <ul className="flex flex-col">
              {product.productImgs.map((img, index) => {
                return (
                  <li key={index} className="my-3 w-[44px] h-[56px]">
                    <button onClick={() => setImgIndex(index)}>
                      <Image
                        src={img}
                        width={1000}
                        height={1000}
                        className="w-full "
                        alt="alt_img"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* buy the look icon */}
            <div className="mr-6 mt-2">
              <Link
                href="#buyTheLook"
                className="h-full flex flex-col justify-center items-center"
              >
                <Image
                  src={clothesHanger}
                  width={1000}
                  height={1000}
                  alt="alt_img"
                  className="w-[25px] h-[16px] "
                />
                <p className="uppercase tracking-wider font-bold text-[8px] flex justify-center items-center text-center">
                  buy the look
                </p>
              </Link>
            </div>
          </div>

          {/* buy the look href */}
          <div className="md:hidden bg-[#ddd] flex flex-row justify-center items-center h-[56px]">
            <Link
              href="#buyTheLook"
              className="flex flex-row justify-center items-center"
            >
              <Image
                src={clothesHanger}
                alt="alt_img"
                className="mx-1 w-[30px] h-[40px]"
              />
              <p className="mx-2 uppercase font-bold tracking-wider text-sm">
                buy the look
              </p>
            </Link>
          </div>

          {/* product images */}
          <div className="w-full max-w-[700px] ">
            <div className="embla relative">
              {/* extra class added to seperate images from its parent div to be able to insert absolute buttons */}
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {/* image mapping for slides */}
                  {product.productImgs.map((img, index) => {
                    return (
                      <div className="embla__slide" key={index}>
                        <Image
                          src={img}
                          alt="alt_img"
                          width={10000}
                          height={10000}
                          className="w-full h-full object-cover cursor-magnify"
                        />
                      </div>
                    );
                  })}
                  {/* image mapping end */}
                </div>
              </div>

              {/* arrow buttons to move between different images */}
              <button
                className="embla__prev hidden md:block absolute left-0 top-1/2 -translate-x-1/2 mx-20 w-[50px] h-[50px]"
                onClick={scrollPrev}
              >
                <Image
                  src={toLeft}
                  alt="alt_img"
                  width={100000}
                  height={100000}
                  className="w-[21px] h-[35px] "
                />
              </button>
              <button
                className="embla__next hidden md:block absolute right-0 top-1/2 -translate-x-1/2 pl-10"
                onClick={scrollNext}
              >
                <Image
                  src={toRight}
                  alt="alt_img"
                  width={100000}
                  height={100000}
                  className="w-[21px] h-[35px] "
                />
              </button>
              {/* arrows end */}
            </div>
          </div>
        </div>

        {/* product text section */}
        <div className="bg-white">
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
          <div id="productSizing" className="px-2">
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
              {productsPage.sizing.shirtSizes.map((sizeOption) => {
                const { sizeId, size, sizeDescription } = sizeOption;
                return (
                  <option key={sizeId} value="size">
                    {size} - {sizeDescription}
                  </option>
                );
              })}
            </select>
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
