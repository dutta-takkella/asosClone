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

  //embla vars
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 4 });
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

  const handleClick = (productId) => {
    setWishListClick((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleMouseEnter = (productId) => {
    setWishListHover((prev) => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    setWishListHover((prev) => ({ ...prev, [productId]: false }));
  };

  return (
    <div className="bg-white mt-2 pb-5 ">
      <div className="pt-6 px-4 text-lg tracking-wide max-w-[960px] mx-auto bg-white ">
        <h3 className="uppercase font-bold">people also bought</h3>
        {/* carousel element */}
        <div className="carousel flex flex-row mt-6 bg-white">
          {/* button to scroll through carousel slides */}
          <div className="flex justify-center items-center pb-14">
            <button
              onClick={() => emblaApi.scrollPrev()}
              disabled={selectedIndex === 0}
            >
              <Image
                src={toLeft}
                alt="alt_img"
                width={10000}
                height={10000}
                className="w-[18px] h-[31px] "
              />
            </button>
          </div>
          <div className="carousel__viewport bg-white" ref={emblaRef}>
            <div className="carousel__container bg-white">
              {productsPage.peopleAlsoBought.map((product) => {
                const { productId, productName, price, heroImg, href } =
                  product;
                return (
                  <div key={productId} className="carousel__slide  w-[162px]">
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
                              wishListClick[productId] ||
                              wishListHover[productId]
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* button to scroll through carousel slides */}
          <div className="flex justify-center items-center pb-14">
            <button onClick={() => emblaApi.scrollNext()}>
              <Image
                src={toRight}
                alt="alt_img"
                width={10000}
                height={10000}
                className="w-[18px] h-[31px] "
              />
            </button>
          </div>
        </div>

        {/* Pagination Bullets */}
        <div className="carousel__pagination pt-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`carousel__bullet ${
                selectedIndex === index ? "is-selected" : ""
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
