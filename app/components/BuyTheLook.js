//data
import productsPage from "./productsPage.json";

//components
import SizingOptions from "./SizingOptions.js";

//nextjs tags
import Image from "next/image";
import Link from "next/link";

//hooks
import { useState, useEffect } from "react";

//icons
import letterWhite from "../../public/svgIcons/letterWhite.svg";

export default function BuyTheLook({ currentProduct }) {
  let items = currentProduct.otherProductsUsed.length;
  const otherProductsL = currentProduct.otherProductsUsed;
  const otherProductsS = currentProduct.otherProductsUsed.slice(0, 4);
  const moreOtherP = items - otherProductsS.length;
  const [selectedProduct, setSelectedProduct] = useState(otherProductsL[0]);
  const [displayProduct, setDisplayProduct] = useState(
    productsPage.products.find((product) => {
      return selectedProduct === product.productCode ? product : "";
    })
  );
  const [sizeCategory, setSizeCategory] = useState("shirtSizes");
  const [focus, setFocus] = useState(displayProduct.productCode);

  useEffect(() => {
    const dummy = productsPage.products.find((product) => {
      return selectedProduct === product.productCode ? product : "";
    });
    setDisplayProduct(dummy);
  }, [selectedProduct]);

  // for whislisting
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
    <div id="buyTheLook" className="w-full">
      {/* upto md screen */}
      <div className="md:hidden bg-white mt-6 mx-4">
        <div className="py-3 px-4">
          {/* section title */}
          <h3 className="uppercase tracking-wide text-lg font-bold">
            buy the look
          </h3>
          <p className="flex justify-between text-[12px] mt-1 tracking-wider">
            Shop the model&apos;s full &apos;fit
          </p>

          {/* images */}
          <div className="grid grid-cols-2 gap-[2px] pt-4">
            <div>
              <Image
                src={currentProduct.productHeroImg}
                alt="alt_img"
                height={100000}
                width={100000}
                className="w-full"
              />
            </div>
            <div className="relative">
              <ul className="grid grid-cols-2 gap-[2px]">
                {otherProductsS.map((product) => {
                  const otherP = productsPage.products.find((prod) => {
                    return prod.productCode === product ? prod : "";
                  });

                  const { productCode, productHeroImg } = otherP;
                  return (
                    <li key={productCode}>
                      <Image
                        src={productHeroImg}
                        alt="alt_img"
                        width={100000}
                        height={1000000}
                        className="w-full"
                      />
                    </li>
                  );
                })}
              </ul>

              {/* icon indicating number of items not visible on the grid */}
              <div className="absolute bottom-1 right-1 flex justify-center items-center align-middle  bg-black bg-opacity-60 rounded-full text-white text-[11px] font-bold px-2">
                <p className="text-center sm:text-xs text-sm flex justify-center items-center">
                  +{moreOtherP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* from md screen */}
      <div className="hidden md:block pt-10 mb-6 max-w-[960px] mr-0 md:mx-auto">
        {/* text section */}
        <h3 className="uppercase font-bold text-lg tracking-wide ">
          buy the look
        </h3>
        <p className="flex justify-between text-sm mt-1 tracking-wide">
          <span>Shop the model&apos;s full &apos;fit</span>
          <span>{items} items</span>
        </p>

        {/* products section */}
        <div className="grid grid-cols-[370px_1fr] max-w-full gap-4 mt-5">
          {/* current product */}
          <div className="shadow-sm shadow-neutral-500 ">
            <Image
              src={currentProduct.productHeroImg}
              alt="alt_img"
              width={10000}
              height={10000}
            />
          </div>

          {/* other products */}
          <div className="grid grid-rows-[128px_1fr] bg-white px-2 ">
            {/* list of other products */}
            <div className=" overflow-y-scroll no-scrollbar w-[100%] border-b border-black">
              <ul className="flex flex-row justify-start align-middle mt-[10px] items-center">
                {otherProductsL.map((product) => {
                  const otherProduct = productsPage.products.find((isMatch) => {
                    return product === isMatch.productCode ? isMatch : "";
                  });
                  return (
                    <li
                      key={otherProduct.productCode}
                      className="mr-4 relative flex items-center"
                    >
                      <button
                        className={`relative w-[85px] h-[106px] hover:border-2 hover:border-[#0770cf]  ${
                          focus === otherProduct.productCode &&
                          "border-2 border-black hover:border-2 hover:border-black"
                        } `}
                        onClick={() =>
                          setSelectedProduct(otherProduct.productCode)
                        }
                        onFocus={() => setFocus(otherProduct.productCode)}
                      >
                        <Image
                          src={otherProduct.productHeroImg}
                          alt="alt_img"
                          width={1000}
                          height={1000}
                          className={`w-[81px] h-[102px] mx-auto`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* selected product details */}
            <div className="grid grid-cols-[163px_1fr] lg:grid-cols-[218px_1fr] mt-2 px-2">
              {/* product img */}
              <div className="">
                {displayProduct && (
                  <div className="relative">
                    <Link href={displayProduct.href} className="">
                      <Image
                        src={displayProduct?.productHeroImg}
                        alt="alt_img"
                        height={100000}
                        width={100000}
                        className="w-full"
                      />
                    </Link>

                    {/* wishlist icon */}
                    <div
                      className="absolute bottom-0 right-0 flex justify-center items-center w-[36px] h-[36px] bg-white bg-opacity-70 rounded-full mb-2 mr-2 hover:cursor-pointer"
                      onMouseEnter={() =>
                        handleMouseEnter(displayProduct.productCode)
                      }
                      onMouseLeave={() =>
                        handleMouseLeave(displayProduct.productCode)
                      }
                      onClick={() => handleClick(displayProduct.productCode)}
                    >
                      <Image
                        src={
                          hoverState[displayProduct.productCode] ||
                          clickState[displayProduct.productCode]
                            ? "/svgIcons/filledHeart.svg"
                            : "/svgIcons/outlineHeart.svg"
                        }
                        width={1000}
                        height={1000}
                        alt="heart_icon"
                        className="w-[18px] h-[18px]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* product details */}
              <div className="pl-4">
                {/* product name and stock status */}
                {!displayProduct.inStock && (
                  <h3 className="text-red-600 text-sm font-bold uppercase pb-2">
                    Out of stock
                  </h3>
                )}
                <h3 className="text-sm font-semibold leading-5 tracking-wider line-clamp-3">
                  {displayProduct?.productName}
                </h3>

                {/* product price */}
                <p id="productPrice" className="text-sm mt-2 font-bold">
                  {displayProduct?.price % 1 === 0 ? (
                    <span>&#163;{displayProduct?.price}.00</span>
                  ) : (
                    <span>&#163;{displayProduct?.price}</span>
                  )}
                </p>

                {/* product color */}
                <p className="text-sm tracking-wider mt-3">
                  <span className="font-bold text-xs">COLOR: </span>
                  <span>{displayProduct?.color}</span>
                </p>

                {/* sizing options */}
                <SizingOptions product={displayProduct} />

                {/* low stock indicator */}
                {displayProduct.inStock && displayProduct.lowStock && (
                  <div className="pb-1 pt-2">
                    <span className="uppercase text-[10px] tracking-widest bg-[#FFEBCC] font-bold px-2 py-1 text-center rounded-full">
                      low in stock
                    </span>
                  </div>
                )}

                {/* add to bag button / out of stock button */}
                {displayProduct.inStock ? (
                  <button className="mt-3 uppercase flex justify-center items-center w-full border-2 border-[#018849] font-bold text-sm py-1 tracking-wide">
                    add to bag
                  </button>
                ) : (
                  <button className="relative text-white mt-3 uppercase flex justify-center items-center w-full bg-[#2D2D2D] hover:bg-black font-bold text-sm pt-[3px] tracking-wide pb-2">
                    <Image
                      src={letterWhite}
                      alt="alt_img"
                      className="w-[30px] h-[23px] absolute left-2 top-1/2 -translate-y-1/2"
                    />
                    <span className="flex justify-center">notify me</span>
                  </button>
                )}

                {/* see similar button */}
                <button className="mt-2 uppercase flex justify-center items-center w-full bg-[#EEEEEE] hover:bg-[#DDDDDD] font-bold text-sm h-[32px] text-center tracking-wide">
                  see similar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
