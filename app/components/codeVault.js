{
  /* Pagination Bullets */
}
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
</div>;

{
  /* image icons */
}
<ul className="flex flex-col">
  {product.productImgs.map((img, index) => {
    return (
      <li key={index} className="my-3 w-[44px] h-[56px]">
        <button>
          <Image
            src={img}
            width={1000}
            height={1000}
            className="w-full "
            alt="alt_img"
          />
        </button>
      </li>
    );
  })}
</ul>;
