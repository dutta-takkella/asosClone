export default function SaleBanner() {
  return (
    <a
      href="https://www.asos.com/men/ctas/coded-promos/promo-2/cat/?cid=50056&ctaref=hp|mw|promo|flexbanner|1|edit|25offselectedstyles"
      className="z-1"
    >
      <div className="bg-gradient-to-r from-[#CCFF00] to-[#FF3A5B] tracking-wider flexClass-col text-center p-4">
        <h3 className="uppercase italic text-5xl font-extrabold py-3">
          25% off selected styles
        </h3>
        <p id="saleCode" className="text-[22px] font-bold">
          <span>Use code: </span>
          <span id="code" className="border-2 border-black p-1">
            FITS
          </span>
        </p>
        <p id="tNc" className="text-xs mt-6 mb-2 tracking-normal">
          See website banner for Ts&Cs. Selected marked products excluded from
          promo.
        </p>
      </div>
    </a>
  );
}
