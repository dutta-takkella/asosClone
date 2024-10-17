{
  /* md screen start */
}
{
  /* carousel element */
}
<div className="carousel  mt-6 hidden md:flex md:flex-row bg-white">
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

  {/* carousel element */}
  <div className="carousel__viewport bg-white" ref={emblaRef}>
    <div className="carousel__container bg-white">
      {productsPage.peopleAlsoBought.map((product) => {
        const { productId, productName, price, heroImg, href } = product;
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
</div>;

{
  /* Pagination Bullets */
}
<div className="carousel__pagination pt-2 hidden md:flex md:justify-center md:mt-[10px]">
  {scrollSnaps.map((_, index) => (
    <button
      key={index}
      className={`carousel__bullet ${
        selectedIndex === index ? "is-selected" : ""
      }`}
      onClick={() => scrollTo(index)}
    />
  ))}
</div>;
{
  /* md screen end */
}
