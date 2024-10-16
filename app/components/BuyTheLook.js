//data
import productsPage from "./productsPage.json";

//headlessui select tag
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

//nextjs tags
import Image from "next/image";

//hooks
import { useState, useEffect } from "react";

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

  // useEffect(() => {
  //   setSelectedProduct(otherProductsL[0]);
  //   const dummy = productsPage.products.find((product) => {
  //     return selectedProduct === product.productCode ? product : "";
  //   });
  //   setDisplayProduct(dummy);
  //   setFocus((prev) => ({ ...prev, [displayProduct?.productCode]: true }));
  //   2;
  // }, []);

  useEffect(() => {
    const dummy = productsPage.products.find((product) => {
      return selectedProduct === product.productCode ? product : "";
    });
    setDisplayProduct(dummy);
  }, [selectedProduct]);

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
      <div className="px-4 mt-5 mb-6 max-w-[960px] mr-0 md:mx-auto">
        {/* text section */}
        <h3 className="uppercase font-bold text-lg tracking-wide ">
          buy the look
        </h3>
        <p className="flex justify-between text-sm mt-1 tracking-wide">
          <span>Shop the model&apos;s full &apos;fit</span>
          <span>{items} items</span>
        </p>

        {/* products section */}
        <div className="grid grid-cols-[370px_1fr] max-w-full gap-2 mt-5">
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
          <div className="grid grid-rows-[120px_1fr] bg-white px-2 ">
            {/* list of other products */}
            <div className=" overflow-y-scroll no-scrollbar w-[100%] border-b border-black">
              <ul className="flex flex-row justify-start align-middle mt-[6px] items-center">
                {otherProductsL.map((product) => {
                  const otherProduct = productsPage.products.find((isMatch) => {
                    return product === isMatch.productCode ? isMatch : "";
                  });
                  console.log(focus, "focus");
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
            <div className="grid grid-cols-[163px_1fr] lg:grid-cols-[218px_1fr] mt-2">
              {/* product img */}
              <div>
                {displayProduct && (
                  <Image
                    src={displayProduct?.productHeroImg}
                    alt="alt_img"
                    height={100000}
                    width={100000}
                    className="w-full"
                  />
                )}
              </div>

              {/* product details */}
              <div>
                {/* product name */}
                <h3>{displayProduct?.productName}</h3>

                {/* product name */}
                <p
                  id="productPrice"
                  className="text-[#666666] font-bold text-lg mt-2 tracking-wider px-2"
                >
                  {displayProduct?.price % 1 === 0 ? (
                    <span>&#163;{displayProduct?.price}.00</span>
                  ) : (
                    <span>&#163;{displayProduct?.price}</span>
                  )}
                </p>

                {/* sizing options */}
                <div>
                  <p>size:</p>
                  <select name="sizes" id="suze" className="bg-white w-full">
                    <option value="123">
                      {productsPage.sizing.shirtSizes[0].sizeDescription}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
