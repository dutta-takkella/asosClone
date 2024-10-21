//nextjs tags
import Image from "next/image";
import Link from "next/link";

//carousel
import useEmblaCarousel from "embla-carousel-react";

//data
import productsPage from "./productsPage.json";

//hooks
import { useState, useCallback, useEffect } from "react";

//image controls
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

//icons
import whiteHeart from "../../public/svgIcons/whiteHeart.svg";
import clothesHanger from "../../public/svgIcons/clothesHanger.svg";
import toLeft from "../../public/svgIcons/toLeft.svg";
import toRight from "../../public/svgIcons/toRight.svg";

export default function ProductImageSection({ prop }) {
  const product = prop;
  //for pagination images
  let imgIndex = 0;

  //for embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  //
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <div className="md:px-3 w-full mx-auto bg-white md:grid md:grid-cols-[68px_1fr] ">
      {/* image icons */}
      <div className="hidden md:block">
        {/* Pagination Bullets */}
        <div className="carousel__pagination flex-col ">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`flex flex-col my-3 w-[45px] h-[56px]`}
              onClick={() => scrollTo(index)}
            >
              <Image
                src={`${product.productImgs[imgIndex++]}`}
                alt="alt_img"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </button>
          ))}
        </div>

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
      {/* icons end */}

      {/* product images */}
      <div className="w-full max-w-[700px] ">
        <div className="embla relative">
          {/* extra class added to seperate images from its parent div to be able to insert absolute buttons */}
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {/* image mapping for slides */}
              {product.productImgs.map((img, index) => {
                return (
                  <div className="embla__slide relative" key={index}>
                    <TransformWrapper>
                      <TransformComponent>
                        <Image
                          src={img}
                          alt="alt_img"
                          width={10000}
                          height={10000}
                          className="w-full h-full object-cover cursor-magnify"
                        />
                      </TransformComponent>
                    </TransformWrapper>

                    {/* heart icon along with num of times wishlisted indicated */}
                    <div className="absolute right-0 bottom-20 bg-black bg-opacity-80 flex flex-row items-center justify-center align-middle px-4 py-1 rounded-l-full">
                      <h3 className="text-white px-2">
                        {product.wishListedTimes}
                      </h3>
                      <Image
                        src={whiteHeart}
                        alt="alt_img"
                        width={500}
                        height={500}
                        className="w-[15px] h-[15px]"
                      />
                    </div>
                  </div>
                );
              })}
              {/* image mapping end */}
            </div>
          </div>

          {/* arrow buttons to move between different images */}
          <button
            className="embla__prev hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 mx-20 w-[50px] h-[50px]"
            onClick={scrollPrev}
          >
            <Image
              src={toLeft}
              alt="alt_img"
              width={500}
              height={500}
              className="w-[21px] h-[35px] "
            />
          </button>
          <button
            className="embla__next hidden md:block absolute right-10 top-1/2 -translate-y-1/2 pl-10"
            onClick={scrollNext}
          >
            <Image
              src={toRight}
              alt="alt_img"
              width={500}
              height={500}
              className="w-[21px] h-[35px] "
            />
          </button>
          {/* arrows end */}
        </div>
      </div>
    </div>
  );
}
