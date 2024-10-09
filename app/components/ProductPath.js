//data from dataJ
import productsPage from "./productsPage.json";

export default function ProductPath() {
  const { gender, brandName, productName, category } = productsPage.products[0];
  return (
    <div
      id="productPath"
      className="hidden md:block px-8 py-4 text-xs font-medium max-w-[1280px] mx-auto"
    >
      <p className="inline pr-4">Home </p>
      <p className="inline pr-4 font-semibold">&gt;</p>
      <p className="inline pr-4 capitalize"> {gender}</p>
      <p className="inline pr-4">&gt;</p>
      <p className="inline pr-4 capitalize"> {category}</p>
      <p className="inline pr-4">&gt;</p>
      <p className="inline pr-4">{brandName}</p>
      <p className="inline pr-4 ">&gt;</p>
      <p className="inline font-normal text-[#666666]">{productName}</p>
    </div>
  );
}
