<ul className="px-1 mt-6 mb-7 flex flex-row  overflow-scroll no-scrollbar">
  {productsPage.peopleAlsoBought.map((product) => {
    const { productId, productName, price, heroImg, href } = product;
    return (
      <li key={productId} className="mr-4 relative">
        <Link href={href}>
          <div className="relative w-[162px]">
            <Image
              src={heroImg}
              alt="alt_img"
              width={1000}
              height={1000}
              className="w-full h-[206px]"
            />
          </div>
          <div className=" mt-3">
            <div className="text-xs tracking-wide font-semibold leading-5 overflow-clip">
              <p className="tracking-wider  line-clamp-2">{productName}</p>
            </div>
            <p
              id="productPrice"
              className="text-[#666666] font-bold text-sm mt-2 tracking-widest"
            >
              {product.price % 1 === 0 ? (
                <span>&#163;{price}.00</span>
              ) : (
                <span>&#163;{price}</span>
              )}
            </p>
          </div>
        </Link>
        <div
          className="absolute bottom-24 right-2 w-[36px] h-[35px] bg-white bg-opacity-70 rounded-full flex justify-center items-center"
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
      </li>
    );
  })}
</ul>;
