//data from dataJ.json
import landingPage from "./landingPage.json";

//hooks
import { useState } from "react";

//image and link tags
import Image from "next/image";
import Link from "next/link";

export default function NavbarMenu() {
  const noImg = (section) => {
    const { sectionId, sectionName, categories } = section;
    let firstColumnCategories = categories.slice(0, 14);
    let secondColumnCategories = categories.slice(14);
    if (categories.length > 14) {
      let firstCol = Math.ceil(categories.length / 2);
      firstColumnCategories = categories.slice(0, firstCol);
      secondColumnCategories = categories.slice(firstCol);
    }

    return (
      <section
        key={sectionId}
        className={`text-[#666] border-r border-[#ccc] last:border-none px-6 ${
          categories.length > 14 ? "col-span-2" : "col-span-1"
        } font-medium`}
      >
        <h3 className="uppercase font-bold text-sm">{sectionName}</h3>

        <div
          className={`grid ${
            categories.length > 14 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <ul className="pt-2">
            {firstColumnCategories.map((category) => {
              const { categoryId, categoryName, href, isBold, textColor } =
                category;
              return (
                <li
                  key={categoryId}
                  className={`footer-info-list-item text-sm ${
                    isBold ? "font-bold" : "font-medium"
                  } py-[2px] `}
                >
                  <Link
                    href={href}
                    className={`${textColor && `text-${textColor}`}`}
                  >
                    {categoryName}
                  </Link>
                </li>
              );
            })}
          </ul>

          {secondColumnCategories.length > 0 && (
            <ul className="pt-2">
              {secondColumnCategories.map((category) => {
                const { categoryId, categoryName, href, isBold, textColor } =
                  category;
                return (
                  <li
                    key={categoryId}
                    className={`footer-info-list-item text-sm ${
                      isBold ? "font-bold" : "font-medium"
                    } py-[2px]`}
                  >
                    <Link
                      href={href}
                      className={`${textColor && `text-${textColor}`}`}
                    >
                      {categoryName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    );
  };

  const smallIcon = (section) => {
    const { sectionId, sectionName, categories } = section;
    return (
      <section
        key={sectionId}
        className="text-[#666] border-r border-[#ccc] last:border-none px-6 font-medium"
      >
        <h3 className="uppercase font-bold text-sm">{sectionName}</h3>
        <ul className="pt-4">
          {categories.map((category) => {
            const { categoryId, categoryName, href, isBold, img } = category;
            return (
              <li
                key={categoryId}
                className={`footer-info-list-item text-sm ${
                  isBold ? "font-bold" : "font-n=medium"
                } group last:border-none`}
              >
                <Link
                  href={href}
                  className="grid grid-cols-[auto_1fr] justify-start align-middle items-center"
                >
                  <div className="">
                    <Image
                      src={img}
                      height={40}
                      width={40}
                      alt="img_alt"
                      className="inline-block rounded-full border border-[#ccc] p-[2px] group-hover:border-[#0770cf] w-[40px] h-[40px]"
                    />
                  </div>
                  <div className="flex flex-row align-middle items-center border-b border-[#ccc] p-3 mx-2">
                    <p className="px-2 group-hover:border-[#0770cf]">
                      {categoryName}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const largeIcon = (section) => {
    const { sectionId, sectionName, categories } = section;
    let firstCol = categories.slice(0, 2);
    let secondCol = categories.slice(2);
    if (categories.length > 2) {
      const half = categories.length / 2;
      firstCol = categories.slice(0, half);
      secondCol = categories.slice(half);
    }
    return (
      <section
        key={sectionId}
        className={` text-[#666] border-r border-[#ccc] last:border-none px-6 font-medium`}
      >
        <h3 className="uppercase font-bold">{sectionName}</h3>
        <div
          className={`grid ${
            categories.length > 2 ? "grid-cols-2" : "grid-cols-1"
          } `}
        >
          <ul className="pt-4">
            {firstCol.map((category) => {
              const { categoryId, categoryName, href, isBold, img } = category;
              return (
                <li
                  key={categoryId}
                  className={`footer-info-list-item text-sm ${
                    isBold ? "font-bold" : "font-medium"
                  } p-2 group`}
                >
                  <Link href={href} className="flexClass-col">
                    <Image
                      src={img}
                      height={40}
                      width={40}
                      alt="img_alt"
                      className="rounded-full border border-[#ccc] p-[2px] group-hover:border-[#0770cf] w-[78px] h-[78px]"
                    />
                    <p className="px-2 py-1 group-hover:border-[#0770cf]">
                      {categoryName}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          {categories.length > 2 && (
            <ul className="pt-4">
              {secondCol.map((category) => {
                const { categoryId, categoryName, href, isBold, img } =
                  category;
                return (
                  <li
                    key={categoryId}
                    className={`footer-info-list-item text-sm ${
                      isBold ? "font-bold" : "font-normal"
                    } p-2 group`}
                  >
                    <Link href={href} className="flexClass-col">
                      <Image
                        src={img}
                        height={40}
                        width={40}
                        alt="img_alt"
                        className="rounded-full border border-[#ccc] p-[2px] group-hover:border-[#0770cf] w-[78px] h-[78px]"
                      />
                      <p className="px-2 py-1 group-hover:border-[#0770cf]">
                        {categoryName}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    );
  };

  const smallImg = (section) => {
    const { sectionId, sectionName, categories } = section;
    return (
      <section key={sectionId} className="text-[#666]">
        {sectionName && (
          <h3 className="uppercase text-sm font-bold px-6">{sectionName}</h3>
        )}
        <ul className="pt-4">
          {categories.map((category) => {
            const { categoryId, categoryName, img, href, textColor } = category;
            return (
              <li
                key={categoryId}
                className="relative mx-4 border border-[#ccc] hover:border-[#0770cf] mt-3"
              >
                <Link href={href}>
                  <Image
                    src={img}
                    width={1000}
                    height={1000}
                    alt="img_alt"
                    className="p-[2px]"
                  />
                  <div
                    className={`absolute inset-0 flex flex-row justify-center align-bottom items-end bg-gradient-to-t ${
                      textColor === "black"
                        ? "from-slate-50 via-transparent to-transparent"
                        : "from-neutral-600 via-transparent to-transparent"
                    } z-[1] m-[2px]`}
                  >
                    <p
                      className={`pb-6 uppercase text-${textColor} font-bold  z-[2]`}
                    >
                      {categoryName}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const largeImg = (section) => {
    const { sectionId, categories } = section;
    return (
      <section
        key={sectionId}
        className="text-[#666] border-r border-[#ccc] last:border-none"
      >
        <div>
          <ul>
            {categories.map((category) => {
              const { categoryId, categoryName, href, img, textColor } =
                category;
              return (
                <li
                  key={categoryId}
                  className="relative mx-6 border border-[#ccc] hover:border-[#0770cf] mt-3"
                >
                  <Link href={href} className="flexClass-row p-[2px]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${
                        textColor === "white"
                          ? "from-transparent via-transparent to-neutral-600"
                          : "from-transparent via-transparent to-slate-50"
                      }  z-[1] m-[2px]`}
                    ></div>
                    <div className="relative flexClass-row">
                      <Image
                        src={img}
                        width={1000}
                        height={1000}
                        alt="alt_img"
                        className="w-[248px] h-[283px]"
                      />
                      <h3
                        className={`absolute bottom-0 uppercase font-bold pb-4 text-lg z-[2] ${
                          textColor ? `text-${textColor}` : ""
                        }`}
                      >
                        {categoryName}
                      </h3>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  };

  const banner = (section) => {
    const { sectionId, categories } = section;
    return (
      <section key={sectionId}>
        <ul>
          {categories.map((category) => {
            const { categoryId, categoryName, href, img, textColor } = category;
            return (
              <li
                key={categoryId}
                className="relative border border-[#ccc] hover:border-[#0770cf] p-[3px] m-2"
              >
                <Link href={href}>
                  <Image
                    src={img}
                    width={1000}
                    height={1000}
                    alt="alt_img"
                    className="w-[248px] h-[100px]"
                  />
                  <h3
                    className={`uppercase font-bold text-sm absolute left-[5%] top-1/2 -translate-y-1/2 text-${textColor}`}
                  >
                    {categoryName}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const article = (section) => {
    const { sectionId, sectionName, categories } = section;
    return (
      <section key={sectionId} className="text-[#666] p-4">
        {sectionName && <h3>{sectionName}</h3>}
        <ul>
          {categories.map((category) => {
            const { categoryId, categoryName, href, img, title, textColor } =
              category;
            return (
              <li key={categoryId}>
                <Link href={href}>
                  <div className="relative">
                    <Image
                      src={img}
                      height={1000}
                      width={1000}
                      alt="img_alt"
                      className="w-[269px] h-[134px]"
                    />
                    <h3
                      className={`p-2 absolute left-0 bottom-0 uppercase font-semibold ${
                        textColor && `text-${textColor}`
                      } tracking-wider text-lg `}
                    >
                      {categoryName}
                    </h3>
                  </div>
                  <p className="bg-white text-sm h-[70px] p-2 text-black">
                    {title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const [hoverOption, setHoverOption] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleMouseEnter = (optionId) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout to update hoverOption after 300ms
    const id = setTimeout(() => {
      setHoverOption(optionId);
    }, 250);

    // Store the timeout ID so it can be cleared later
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Reset hoverOption immediately on mouse leave
    setHoverOption(0);
  };

  return (
    <div className="hidden lg:block">
      <ul
        id="navbarMenu"
        className="relative w-full h-[50px]  grid grid-cols-[repeat(12,auto)] px-10  justify-start  text-white bg-[#525050]"
      >
        {landingPage.navbarMenu.map((option) => {
          const { optionId, optionName } = option;
          return (
            <li
              key={optionId}
              className="navbar-category-list-item px-2"
              onMouseEnter={() => handleMouseEnter(optionId)}
              onMouseLeave={() => handleMouseLeave(optionId)}
            >
              {optionName}
              {hoverOption === optionId && (
                <div className="grid grid-cols-4 grid-rows-14 absolute max-w-screen top-full z-10 left-0 right-0 bg-[#eee] mx-7 py-4 ">
                  {option.sections.map((section) => {
                    const {
                      hasImg,
                      smallIconCategory,
                      largeIconCategory,
                      smallImgCategory,
                      largeImgCategory,
                      bannerCategory,
                      articleCategory,
                    } = section;
                    return !hasImg ? (
                      noImg(section)
                    ) : smallIconCategory ? (
                      smallIcon(section)
                    ) : largeIconCategory ? (
                      largeIcon(section)
                    ) : smallImgCategory ? (
                      smallImg(section)
                    ) : largeImgCategory ? (
                      largeImg(section)
                    ) : bannerCategory ? (
                      banner(section)
                    ) : articleCategory ? (
                      article(section)
                    ) : (
                      <div>error fetching data</div>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
