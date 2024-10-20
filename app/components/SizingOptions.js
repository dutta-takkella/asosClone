//data
import productsPage from "./productsPage.json";

//hooks
import { useState } from "react";

export default function SizingOptions({ product }) {
  const { sizeOptions, oneSize, category } = product;
  const [sizeFocused, setSizeFocused] = useState(false);
  let cat = undefined;

  if (category === "shirts") {
    cat = "shirtSizes";
  } else if (category === "shoes") {
    cat = "shoeSizes";
  } else if (category === "trousers") {
    cat = "trouserSizes";
  }

  return sizeOptions ? (
    oneSize ? (
      <p>
        <span className="text-xs font-bold tracking-widest">size: </span>
        <span className="capitalize text-sm tracking-wide">one size</span>
      </p>
    ) : (
      <div className="mt-3 ">
        <h3 className="text-xs uppercase tracking-widest font-bold">size: </h3>
        <select
          id="sizeOptions"
          name="options"
          onFocus={() => setSizeFocused(true)}
          onBlur={() => setSizeFocused(false)}
          className={`bg-white px-2 py-2 text-sm w-full border border-black mt-2   ml-1  ${
            sizeFocused ? "shadow-sm shadow-[#0770cf]" : ""
          }`}
        >
          {productsPage.sizing[cat].map((suze) => {
            return (
              <option value={suze.sizeId} key={suze.sizeId}>
                {suze.size}{" "}
                {suze.sizeDescription ? `- ${suze.sizeDescription}` : ""}
              </option>
            );
          })}
        </select>
      </div>
    )
  ) : (
    <p className="hidden">asdf</p>
  );
}
