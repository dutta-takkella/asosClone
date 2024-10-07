export default function DiscountNotice() {
  return (
    <section
      id="discount-notice"
      className="hidden md:grid md:grid-cols-2 md:justify-center md:items-center md:align-middle h-[49px] lg:mt-[50px]"
    >
      {/* discount notice */}
      <div id="sale-rate" className="h-full w-full bg-[#CCFF00] flexClass-row">
        <a
          href="https://www.asos.com/men/ctas/coded-promos/promo-2/cat/?cid=50056&ctaref=globalbanner|mw|25offselectedstyles"
          className="hover:opacity-40 transition-all duration-1000"
        >
          <p className="discount-notice-p uppercase">
            25% OFF SELECTED STYLES!*
          </p>
          <p className="discount-notice-p">Use code: FITS</p>
        </a>
      </div>

      {/* shipping fee discount */}
      <div
        id="shipping-fee-discount"
        className="h-full w-full bg-black flexClass-row"
      >
        <p className="h-full flex justify-center align-middle items-center uppercase font-semibold text-white hover:opacity-40 transition-all duration-1000">
          <a href="https://www.asos.com/payments-and-deliveries/delivery/?ctaref=globalbanner|ww|delivery">
            free worldwide delivery
          </a>
        </p>
      </div>
    </section>
  );
}
