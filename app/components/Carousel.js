// components/Carousel.js
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is included if not already

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 4, // Scroll by 4 slides
    align: "start", // Align to the start
    loop: true, // Enable looping of slides
  });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {/* Carousel slides */}
          {[...Array(8)].map((_, index) => (
            <div
              className="embla__slide flex-[0_0_25%] p-2" // Set slide width to 25% (for 4 per view)
              key={index}
            >
              <img
                src="/hero/hero-1.webp"
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
