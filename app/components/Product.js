//data
import productsPage from "./productsPage.json";

//nextjs tags
import Image from "next/image";

//icons
import share from "../../public/svgIcons/share.svg";
import shareFacebook from "../../public/svgIcons/shareFacebook.svg";
import sharePinterest from "../../public/svgIcons/sharePinterest.svg";
import shareWhatsapp from "../../public/svgIcons/shareWhatsapp.svg";
import shareMail from "../../public/svgIcons/shareMail.svg";

export default function Product({ currentProduct, setCurrentProduct }) {
  const product = productsPage.products[0];
  setCurrentProduct(productsPage.products[0]);
  console.log(currentProduct);
  return (
    <div className="px-2 max-w-[960px] mx-auto">
      <div id="productDetails" className="relative w-full mt-5 tracking-wide">
        <p id="productName" className="w-10/12">
          {product.productName}
        </p>
        <div className="absolute top-0 right-0">
          <Image
            src={share}
            alt="alt_img"
            width={1000}
            height={1000}
            className="w-[17px]"
          />
        </div>
        <p
          id="productPrice"
          className="text-[#666666] font-bold text-lg mt-2 tracking-wider"
        >
          &#163;{product.price}.00
        </p>
        <p id="productColor" className="text-xs mt-5 font-bold tracking-widest">
          COLOUR:{" "}
          <span className=" p-1 uppercase font-normal text-base tracking-wide">
            {product.color}
          </span>
        </p>
        <div id="productSizing">
          <div className="flex flex-row justify-between mt-6">
            <p className="text-xs font-bold tracking-widest">SIZE:</p>
            <p className="underline text-xs font-semibold tracking-wider">
              Size Guide
            </p>
          </div>
          <div id="sizeOptions" className="border border-black mt-2">
            <p className="px-2 py-2 text-sm focus:shadow-stone-950">
              Please select
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
