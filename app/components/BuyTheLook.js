//data
import productsPage from "./productsPage.json";

//hooks
import Image from "next/image";

export default function BuyTheLook({ currentProduct }) {
  let items = currentProduct.otherProductsUsed.length;
  // console.log(currentProduct);
  return (
    <div className="bg-[#EEEEEE]">
      <div
        id="sectionDeclaration"
        className="pt-5 px-4 tracking-wide max-w-[960px] mx-auto text-sm"
      >
        <h3 className="uppercase font-bold text-lg">buy the look</h3>
        <p className="grid grid-cols-2">
          <span className="flex justify-start text-sm mt-1">
            Shop the model&apos;s full &apos;fit
          </span>
          <span className="flex justify-end">{items} items</span>
        </p>
      </div>
      <div id="productsUsed">
        <div id="currentProduct">
          <Image
            src={currentProduct.productHeroImg}
            width={1000}
            height={1000}
            className="w-full"
            alt="alt_img"
          />
        </div>
      </div>
    </div>
  );
}
