//hooks
import { useState, useCallback, useEffect } from "react";

//embla carousel
import useEmblaCarousel from "embla-carousel-react";

//data
import productsPage from "./productsPage.json";

//icons
import outlineHeart from "../../public/svgIcons/outlineHeart.svg";
import filledHeart from "../../public/svgIcons/filledHeart.svg";
import toLeft from "../../public/svgIcons/toLeft.svg";
import toRight from "../../public/svgIcons/toRight.svg";

//nextjs tag
import Image from "next/image";
import Link from "next/link";

export default function PeopleAlsoBought() {
  const [wishListHover, setWishListHover] = useState({});
  const [wishListClick, setWishListClick] = useState({});
  let numOfProds = 0;
  let prods = [];
  let slideCount = 1;
  const totalProds = productsPage.peopleAlsoBought.length;
  let prodsDisplay = 0;

  const handleClick = (productId) => {
    setWishListClick((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleMouseEnter = (productId) => {
    setWishListHover((prev) => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    setWishListHover((prev) => ({ ...prev, [productId]: false }));
  };

  //wishlist status
  const [hoverState, setHoverState] = useState({});
  const [clickState, setClickState] = useState({});

  const click = (productId) => {
    setClickState((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const mouseEnter = (productId) => {
    setHoverState((prev) => ({ ...prev, [productId]: true }));
  };

  const mouseLeave = (productId) => {
    setHoverState((prev) => ({ ...prev, [productId]: false }));
  };

  // carousel element vars
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Callback to update the selected bullet
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Setup embla and update snaps (slide positions)
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Function to scroll to a specific slide
  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="bg-white mt-2 pb-5">
      <div className="pt-6 px-4 text-lg tracking-wide max-w-[960px] mx-auto bg-white relative ">
        <h3 className="uppercase font-bold">people also bought</h3>
        {/* md screen start */}
        {/* carousel element */}
        <div className="carousel mt-4">
          <div className="carousel__viewport hidden pAB:block" ref={emblaRef}>
            <div className="carousel__container">
              {productsPage.peopleAlsoBought.map((product) => {
                prodsDisplay++;
                if (numOfProds === 0) {
                  prods = [];
                }
                if (numOfProds < 4 && prodsDisplay < totalProds) {
                  numOfProds++;
                  prods.push(product);
                  return undefined;
                } else {
                  numOfProds = 0;
                  return (
                    <div
                      key={slideCount++}
                      className={`${
                        prods.length === 4
                          ? "carousel__slide"
                          : "carousel__incomplete__slide px-3"
                      }`}
                    >
                      {prods.map((pab) => {
                        const {
                          productCode,
                          productName,
                          price,
                          heroImg,
                          href,
                        } = pab;
                        return (
                          <div
                            key={productCode}
                            className={`w-[162px] relative ${
                              prods.length < 4
                                ? "first:mx-8 last:mx-8 mx-4"
                                : " "
                            }`}
                          >
                            <Link href={href} className="w-full">
                              {/* image section */}
                              <div className="">
                                <Image
                                  src={heroImg}
                                  alt="product_img"
                                  width={1000}
                                  height={1000}
                                  className="w-full"
                                />
                              </div>

                              {/* text section */}
                              <p className="text-xs tracking-wide line-clamp-2 pt-2">
                                {productName}
                              </p>
                              <p
                                id="productPrice"
                                className="text-[#666666] font-semibold text-xs mt-3 tracking-wider"
                              >
                                {product.price % 1 === 0 ? (
                                  <span>&#163;{price}.00</span>
                                ) : (
                                  <span>&#163;{price}</span>
                                )}
                              </p>
                              {/* text section end */}
                            </Link>
                            <div
                              className="absolute bottom-[68px] -right-1 flex justify-center items-center w-[36px] h-[36px] bg-white bg-opacity-70 rounded-full mb-2 mr-2"
                              onMouseEnter={() => mouseEnter(productCode)}
                              onMouseLeave={() => mouseLeave(productCode)}
                              onClick={() => click(productCode)}
                            >
                              <Image
                                src={
                                  hoverState[productCode] ||
                                  clickState[productCode]
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
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* Pagination Bullets */}
          <div className="carousel__pagination ">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`carousel__bullet hidden pAB:flex ${
                  selectedIndex === index ? "is-selected" : ""
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
        {/* md screen end */}

        {/* sm screen start */}
        <ul className="flex flex-row mt-6 overflow-scroll no-scrollbar pAB:hidden">
          {productsPage.peopleAlsoBought.map((product) => {
            const { productId, productName, price, heroImg, href } = product;
            return (
              <li key={productId} className=" w-[162px] mx-2 ">
                <Link href={href}>
                  {/* image section */}
                  <div className="relative w-[162px]">
                    <Image
                      src={heroImg}
                      alt="alt_img"
                      width={10000}
                      height={10000}
                      className="w-full h-[206px]"
                    />

                    {/* icon indicating wishlist status */}
                    <div
                      className="absolute bottom-2 right-2 w-[36px] h-[35px] bg-white bg-opacity-70 rounded-full flex justify-center items-center"
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
                  </div>

                  {/* text section */}
                  <div className="mt-3 flex flex-col justify-start w-[162px]">
                    <div className="text-xs tracking-wide font-semibold leading-5 overflow-hidden">
                      <p className="tracking-wider  line-clamp-2 w-full">
                        {productName}
                      </p>
                    </div>
                    <p
                      id="productPrice"
                      className="text-[#666666] font-bold text-sm mt-2 tracking-wider"
                    >
                      {product.price % 1 === 0 ? (
                        <span>&#163;{price}.00</span>
                      ) : (
                        <span>&#163;{price}</span>
                      )}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* sm screen end */}

        {/* buttons on md screen */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden pAB:block">
          <button
            onClick={() => emblaApi.scrollPrev()}
            disabled={selectedIndex === 0}
          >
            <Image
              src={toLeft}
              width={500}
              height={500}
              alt="alt_img"
              className="w-[18px] h-[31px] "
            />
          </button>
        </div>
        <div>
          <button
            onClick={() => emblaApi.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden pAB:block"
          >
            <Image
              src={toRight}
              width={500}
              height={500}
              alt="alt_img"
              className="w-[18px] h-[31px] "
            />
          </button>
        </div>
        {/* buttons end */}
      </div>
    </div>
  );
}
