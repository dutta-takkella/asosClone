<ul className="flex flex-row w-full">
  <li className="relative">
    <Image
      src={product.productImgs[imgIndex]}
      alt="alt_img"
      width={100000}
      height={100000}
      className="w-full h-full object-cover cursor-magnify"
    />
    {/* wishlisted times indicated with a icon on the product image */}
    <div className="absolute right-0 bottom-10 bg-black bg-opacity-80 w-[83px] h-[28px] flex flex-row items-center rounded-l-full">
      <span className="text-white text-xs tracking-widest font-extrabold pl-4">
        {product.wishListedTimes}
      </span>
      <Image src={whiteHeart} alt="alt_img" className="w-[31px] h-[16px]" />
    </div>

    {/* arrows to move between the different images */}
    <button
      className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 mx-20 w-[50px] h-[50px]"
      onClick={() => handleLeftClick()}
    >
      <Image
        src={toLeft}
        alt="alt_img"
        width={100000}
        height={100000}
        className="w-[21px] h-[35px] "
      />
    </button>
    <button
      className="hidden md:block absolute right-0 top-1/2 -translate-x-1/2 pl-10"
      onClick={() => handleRightClick()}
    >
      <Image
        src={toRight}
        alt="alt_img"
        width={100000}
        height={100000}
        className="w-[21px] h-[35px] "
      />
    </button>
  </li>
</ul>;
