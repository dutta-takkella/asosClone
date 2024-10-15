//hooks
import { useState } from "react";

//nextjs tags
import Link from "next/link";
import Image from "next/image";

//icons
import minus from "../../public/svgIcons/minus.svg";

//data
import productsPage from "./productsPage.json";

export default function ProductDetails({ product }) {
  const [openSection, setOpenSection] = useState({});

  const handleDetailClick = (sectionId) => {
    setOpenSection((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleDetailBlur = (sectionId) => {
    setOpenSection((prev) => ({ ...prev, [sectionId]: false }));
  };

  const pD = (detail) => {
    return (
      <div className="mt-3 text-sm">
        <p>
          <span className="capitalize font-semibold underline">
            {product.category}
          </span>{" "}
          by{" "}
          <span className="font-semibold underline"> {product.brandName}</span>
        </p>
        <ul className="pl-1 mt-5">
          {detail.list.map((item, index) => {
            return (
              <li key={index} className="list-disc list-inside first:mt-3 mt-3">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="mt-4 mb-8">Product Code: {product.productCode}</p>
      </div>
    );
  };

  const bD = (detail) => {
    const id = detail.brandId;
    const brand = productsPage.brands.find((brand) => {
      return brand.brandId ? brand : "";
    });
    return (
      <p className="text-sm mt-3 tracking-wide leading-relaxed mb-8">
        {brand.brandText}
      </p>
    );
  };

  const sNF = (detail) => {
    const { modelHeightInCm, modelHeightInInches, sizeCode } = detail;
    const articleSize = productsPage.sizing.shirtSizes.find((size) => {
      return size.sizeId === sizeCode ? size : "";
    });
    return (
      <div className="text-sm tracking-wide mt-3">
        {/* model measurements */}
        <p>
          Model&#39;s height:{" "}
          <span>
            {modelHeightInCm}cm/{modelHeightInInches}&#34;
          </span>
        </p>

        {/* model article size */}
        <p className="mt-1">
          Model is wearing: {articleSize.size} - {articleSize.sizeDescription}
        </p>

        {/* sizing help */}
        <div className="mt-3 mb-8">
          <h3 className="font-bold">Sizing Help</h3>
          <p className="mt-3 leading-relaxed">
            Still unsure what size to get?{" "}
            <span className="underline">Find your recommended size</span> or
            check out our <span className="underline">size guide</span>
          </p>
        </div>
      </div>
    );
  };

  const lAM = (detail) => {
    return (
      <div className="text-sm tracking-wide mt-3 mb-8">
        <p>{detail.careInstructions}</p>
      </div>
    );
  };

  const aM = (detail) => {
    const { materialIds, main } = detail;
    const articleMaterials = materialIds.map((articleMaterialId) => {
      return productsPage.materials.filter((material) => {
        return articleMaterialId === material.materialId ? material : "";
      });
    });

    return (
      <div className="mt-3 text-sm tracking-wide mb-6">
        <ul>
          {articleMaterials.map((materials) =>
            materials.map((material) => (
              <li key={material.materialId}>
                <p>
                  {material.materialName}: {material.materialAttributes}
                </p>
              </li>
            ))
          )}
        </ul>

        <p className="mt-6">Main: {main}</p>
      </div>
    );
  };

  return (
    <div className="mt-3 text-[#2D2D2D]">
      <ul>
        {product.details.map((detail) => {
          const {
            sectionId,
            sectionName,
            productDetails,
            brandDetails,
            sizeNFit,
            lookAfterMe,
            aboutMe,
          } = detail;

          return (
            <li key={sectionId} className=" border-t border-[#ddd] px-3">
              {/* title */}
              <div className="flex flex-row justify-between">
                <button
                  className={`flex items-center ${
                    openSection[sectionId] ? "shadow-sm shadow-[#0770cf]" : ""
                  } w-full `}
                  onClick={() => handleDetailClick(sectionId)}
                  onBlur={() => handleDetailBlur(sectionId)}
                >
                  <h3 className="font-bold tracking-wider text-sm">
                    {sectionName}
                  </h3>
                </button>
                <div className="relative flex flex-row justify-center items-center w-[20px] h-[44px] mr-3">
                  <Image src={minus} alt="alt_img" className="w-full" />
                  <Image
                    src={minus}
                    alt="alt_img"
                    className={`absolute origin-center rotate-90 ${
                      openSection[sectionId] ? "rotate-0" : ""
                    } w-full transition-all duration-700`}
                  />
                </div>
              </div>

              {/* description */}
              <div
                className={`${
                  openSection[sectionId]
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden w-full h-auto transition-all duration-500 ease-linear`}
              >
                {productDetails ? (
                  pD(detail)
                ) : brandDetails ? (
                  bD(detail)
                ) : sizeNFit ? (
                  sNF(detail)
                ) : lookAfterMe ? (
                  lAM(detail)
                ) : aboutMe ? (
                  aM(detail)
                ) : (
                  <div>error fetching data</div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
