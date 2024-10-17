"use client";

//hooks
import { useEffect, useState } from "react";

// site logo
import AsosWhiteLogo from "../../public/AsosWhiteLogo.svg";

// icons
import { User } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";

// for using nextjs tags
import Image from "next/image";
import Link from "next/link";

// for importing navbar menu component
import NavbarMenu from "./NavbarMenu.js";

export default function Navbar({ setIsFocused, isFocused }) {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${isSticky ? "sticky top-0 z-10" : ""}`}>
      <nav id="navbar" className="max-w-screen h-[50px] md:h-[60px]">
        {/* 
        =======
        navbar
        =======
        */}
        <ul
          id="navigation"
          className="h-full flex justify-between uppercase bg-[#2d2d2d] text-white font-bold text-sm tracking-widest px-0 md:px-4"
        >
          <div className="flex flex-row justify start">
            {/* hamburger menu */}
            <li className="flexClass-row lg:hidden h-full w-[58px] md:w-[64xpx] hover:cursor-pointer">
              <Menu size={24} />
            </li>

            {/* logo/home */}
            <li className="flex justify-center w-[73px] md:w-[86px] lg:w-[106px] align-middle items-center hover:cursor-pointer lg:border-r lg:border-[#525050]">
              <a href="https://www.asos.com/men/">
                <Image
                  src={AsosWhiteLogo}
                  width={1000}
                  height={1000}
                  alt="asos.logo"
                  className="text-white w-full"
                />
              </a>
            </li>

            {/* women's section */}
            <li className="hidden lg:flex lg:justify-center lg:items-center hover:cursor-pointer hover:bg-[#525050] w-[113px]">
              <a href="https://www.asos.com/women/">women</a>
            </li>

            {/* men's section */}
            <li className="bg-[#525050] hidden lg:flex lg:justify-center lg:items-center hover:cursor-pointer w-[113px]">
              men
            </li>
          </div>

          {/* searchbar */}
          <li
            className={`hidden md:flex justify-center items-center hover:cursor-text pl-4 ${
              isFocused ? "z-[999]" : "z-1"
            }`}
          >
            <div id="searchbar" className="relative flex w-full">
              <form className="flex w-full">
                <input
                  type="text"
                  placeholder="Search for items and brands"
                  className="text-black bg-white h-9 min-w-[441px] w-full text-sm rounded-full placeholder:font-medium my-[2px] pl-3 pr-10 tracking-normal z-[99]"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <button
                  type="submit"
                  className="absolute z-[999] top-1/2 -translate-y-1/2 right-3 block rounded-full"
                >
                  <Search color="black" className="h-5 w-5" />
                </button>
              </form>
            </div>
          </li>

          {/* icons */}
          <div className="flex justify-end items-center h-full">
            {/* profile */}
            <li className="flex justify-center items-center h-full w-[50px]">
              <Link href="https://my.asos.com/identity/login?signin=15aca75556d850f7a352530ff4c6311e">
                <User
                  size={22}
                  strokeWidth={2.5}
                  className="hover:cursor-pointer"
                />
              </Link>
            </li>

            {/* wishlist */}
            <li className="flex justify-center items-center h-full w-[50px]">
              <a href="https://www.asos.com/saved-lists/?nlid=nav%20header">
                <Heart
                  size={22}
                  strokeWidth={2.5}
                  className="hover:cursor-pointer"
                />
              </a>
            </li>

            {/* cart */}
            <li className="flex justify-center items-center h-full w-[50px]">
              <a href="https://www.asos.com/bag?nlid=nav%20header">
                <ShoppingBag
                  size={22}
                  strokeWidth={2.5}
                  className="hover:cursor-pointer"
                />
              </a>
            </li>
          </div>
        </ul>
        <NavbarMenu />
      </nav>
    </div>
  );
}
