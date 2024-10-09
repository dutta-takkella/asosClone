//hooks
import { useState } from "react";

//nextjs tags
import Link from "next/link";
import Image from "next/image";

//icons
import minus from "../../public/svgIcons/minus.svg";

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
      <div>
        <p>
          <span className="capitalize font-semibold">{product.category} </span>
          by<span className="font-semibold"> {product.brandName}</span>
        </p>
        <ul>
          {detail.list.map((item, index) => {
            console.log(item);
            return (
              <li key={index}>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const bD = () => {
    return (
      <div>
        <h3>brandDetails</h3>
      </div>
    );
  };

  const sNF = () => {
    return (
      <div>
        <h3>sizeNFit</h3>
      </div>
    );
  };

  const lAM = () => {
    return (
      <div>
        <h3>lookafterme</h3>
      </div>
    );
  };

  const aM = () => {
    return (
      <div>
        <h3>aboutme</h3>
      </div>
    );
  };

  return (
    <div className="my-3">
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
                <div className="relative flex flex-row justify-center items-center w-[20px] h-[44px]">
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
                {/* <h3>hello world</h3> */}
                {productDetails ? (
                  pD(detail)
                ) : brandDetails ? (
                  bD()
                ) : sizeNFit ? (
                  sNF()
                ) : lookAfterMe ? (
                  lAM()
                ) : aboutMe ? (
                  aM()
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
