//data
import productsPage from "./productsPage.json";

//nextjs tags
import Image from "next/image";

export default function BuyTheLook({ currentProduct }) {
  let items = currentProduct.otherProductsUsed.length;
  const otherProductsL = currentProduct.otherProductsUsed;
  const otherProductsS = currentProduct.otherProductsUsed.slice(0, 4);
  const moreOtherP = items - otherProductsS.length;
  return (
    <>
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
            <div className="grid grid-rows-[150px_1fr] bg-white px-2 ">
              {/* list of other products */}
              <div className=" overflow-y-scroll no-scrollbar w-[100%] border-b border-black">
                <ul className="px-1 mt-6 mb-7 flex flex-row">
                  {otherProductsL.map((product) => {
                    const otherProduct = productsPage.products.find(
                      (isMatch) => {
                        return product === isMatch.productCode ? isMatch : "";
                      }
                    );
                    return (
                      <li
                        key={otherProduct.productCode}
                        className="mr-4 relative"
                      >
                        <button className="relative w-[81px] h-[102px] ">
                          <Image
                            src={otherProduct.productHeroImg}
                            alt="alt_img"
                            width={1000}
                            height={1000}
                            className="w-full h-full"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* details of selected products */}
              <div className="grid grid-cols-[163px_1fr]">
                {/* product image */}
                <div>
                  <Image alt="alt_img" />
                </div>

                {/* product description */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* buy the look */}
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
        <div className="pt-6 px-4 text-lg tracking-wide max-w-[960px] mr-0 md:mx-auto "></div>
      </div>
    </>
  );
}
