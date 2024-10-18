"use client";
//component imports
import Navbar from "../components/Navbar.js";
import DiscountNotice from "../components/DiscountNotice.js";
import Region from "../components/Region.js";
import Footer from "../components/Footer.js";
import Product from "../components/Product.js";
import YouMightLike from "../components/YouMightLike.js";
import BuyTheLook from "../components/BuyTheLook.js";
import PeopleAlsoBought from "../components/PeopleAlsoBought.js";
import ProductPath from "../components/ProductPath.js";
import Btt from "../components/Btt.js";

//hooks
import { useState } from "react";

//data
import productsPage from "../components/productsPage.json";

export default function ProductPage() {
  const [shareIcons, setShareIcons] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(
    productsPage.products[0]
  );
  return (
    <div className="relative z-0 bg-[#EEEEEE]">
      {isFocused && (
        <div className="absolute inset-0 bg-black opacity-50 z-[99]"></div>
      )}
      {shareIcons && <div className="absolute bottom-0"></div>}
      <Region />
      <Navbar isFocused={isFocused} setIsFocused={setIsFocused} />
      <DiscountNotice />
      <ProductPath />
      <Product />
      <YouMightLike />
      <BuyTheLook currentProduct={currentProduct} />
      <PeopleAlsoBought />
      <Btt />
      <Footer />
    </div>
  );
}
