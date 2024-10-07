//data from dataJ
import productsPage from "./productsPage.json";

export default function ProductPath() {
  const { gender, brandName, productName } = productsPage.products[0];
  return (
    <div className="px-8 py-4 text-xs">
      <p className="inline pr-4 font-semibold">Home </p>
      <p className="inline pr-4 font-semibold">&gt;</p>
      <p className="inline pr-4 font-semibold"> {gender}</p>
      <p className="inline pr-4 font-semibold">&gt;</p>
      <p className="inline pr-4 font-semibold">A To Z Of Brands</p>
      <p className="inline pr-4 font-semibold">&gt;</p>
      <p className="inline pr-4 font-semibold">{brandName}</p>
      <p className="inline pr-4 font-semibold">&gt;</p>
      <p className="inline">{productName}</p>
    </div>
  );
}
