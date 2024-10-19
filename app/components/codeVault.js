<div className="relative">
  <button
    onClick={() => setIsShare((prev) => !prev)}
    onBlur={() => setIsShare(false)}
  >
    <Image
      src={share}
      alt="alt_img"
      width={500}
      height={500}
      className="w-[17px]"
    />
    <div
      className={`absolute top-full left-0 bg-white shadow-2xl w-[132px] h-[68px] flex justify-around items-center shadow-slate-400 ${
        isShare ? "" : "hidden"
      }`}
    >
      {[
        {
          src: shareFacebook,
          alt: "Facebook",
          href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.asos.com%2Ftopman%2Ftopman-long-sleeve-oversized-stripe-shirt-in-burgundy%2Fprd%2F206484835%23ctaref-product_share_facebook",
        },
        {
          src: sharePinterest,
          alt: "Pinterest",
          href: "https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.asos.com%2Ftopman%2Ftopman-long-sleeve-oversized-stripe-shirt-in-burgundy%2Fprd%2F206484835%23ctaref-product_share_pinterest&media=https%3A%2F%2Fimages.asos-media.com%2Fproducts%2Ftopman-long-sleeve-oversized-stripe-shirt-in-burgundy%2F206484835-1-brown&description=Topman%20long%20sleeve%20oversized%20stripe%20shirt%20in%20burgundy",
        },
      ].map((item, index, href) => (
        <Link key={index} href={href}>
          <Image src={item.src} width={44} height={44} alt={item.alt} />
        </Link>
      ))}
    </div>
  </button>
</div>;
