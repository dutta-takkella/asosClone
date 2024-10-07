// components
"use client";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Region from "./components/Region.js";
import DiscountNotice from "./components/DiscountNotice.js";
import TrendingBrands from "./components/TrendingBrands.js";
import AppPromo from "./components/AppPromo.js";
import Hero from "./components/Hero.js";
import Moments from "./components/Moments.js";
import Featured from "./components/Featured.js";
import SaleBanner from "./components/SaleBanner.js";
import { useState } from "react";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [trendingBrandsHover, setTrendingBrandsHover] = useState(false);

  return (
    <div className="relative z-0">
      {isFocused && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[99] pointer-events-none"></div>
      )}
      <Region />
      <Navbar setIsFocused={setIsFocused} isFocused={isFocused} />
      <DiscountNotice />
      <SaleBanner />
      <Hero />
      <Featured />
      <Moments />
      <AppPromo />
      <TrendingBrands
        trendingBrandsHover={trendingBrandsHover}
        setTrendingBrandsHover={setTrendingBrandsHover}
      />
      <Footer />
    </div>
  );
}
