// icons
import Snapchat from "../../public/socialsSVGs/Snapchat.svg";
import Instagram from "../../public/socialsSVGs/Instagram.svg";
import Facebook from "../../public/socialsSVGs/Facebook.svg";

// for using images
import Image from "next/image";

//data
import landingPage from "./landingPage.json";

export default function Footer() {
  return (
    <footer>
      {/* 
      =======
      socials and accepted payment methods 
      =======
      */}
      <section className="py-4 hidden md:flexClass-row">
        {/* 
        =======
        socials
        =======
        */}
        <div
          id="socials"
          className="flexClass-row flex-1 justify-end border-r border-[#999999] pr-4"
        >
          <ul className="flexClass-row h-8">
            <li className="bg-blue-800 rounded-full p-1 m-1 mx-8">
              <a href="https://www.facebook.com/ASOS/">
                <Image
                  src={Facebook}
                  height={18}
                  width={18}
                  alt="facebook.logo"
                />
              </a>
            </li>
            <li className="bg-purple-800 rounded-full px-1 py-[3px] m-2 mx-8">
              <a href="https://www.instagram.com/asos/">
                <Image
                  src={Instagram}
                  height={20}
                  width={20}
                  alt="instagram.logo"
                />
              </a>
            </li>
            <li className="bg-yellow-400 rounded-full p-1 m-2 mx-8">
              <a href="https://www.snapchat.com/add/asosfashion">
                <Image
                  src={Snapchat}
                  height={23}
                  width={21}
                  alt="snapchat.logo"
                  className="fill-white"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* 
        =======
        accepted payment methods
        =======
        */}
        <div
          id="payment-methods"
          className="flexClass-row flex-1 justify-start pl-4"
        >
          <div className="flex flex-row justify-between">
            <Image
              src="/paymentMethods/paymentMethod-1.png"
              width={100}
              height={100}
              alt="alt_img"
              className="w-[32px] h-[20px] bg-white p-1 mx-2"
            />

            <Image
              src="/paymentMethods/paymentMethod-2.png"
              width={100}
              height={100}
              alt="alt_img"
              className="w-[32px] h-[20px] bg-white p-1 mx-2"
            />

            <Image
              src="/paymentMethods/paymentMethod-3.png"
              width={100}
              height={100}
              alt="alt_img"
              className="w-[32px] h-[20px] bg-white p-1 mx-2"
            />

            <Image
              src="/paymentMethods/paymentMethod-4.png"
              width={100}
              height={100}
              alt="alt_img"
              className="w-[32px] h-[20px] bg-white p-1 mx-2"
            />
          </div>
        </div>
      </section>

      {/* 
      =======
      additional info
      =======
      */}
      <div
        id="footer-info"
        className="hidden md:flex md:flex-row md:items-start md:justify-between text-[#666] bg-[#eee] py-6 px-6"
      >
        {landingPage.additionalInfo.map((section) => {
          return (
            <section key={section.id} className="hidden md:block">
              <h3 className="uppercase font-bold tracking-widest hover:cursor-default text-sm py-1">
                {section.sectionTitle}
              </h3>
              <ul className="text-xs">
                {section.subSections.map((subSection) => {
                  const { id, href, subSectionTitle } = subSection;
                  return (
                    <li key={id} className="footer-info-list-item py-1">
                      <a href={href}>{subSectionTitle}</a>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
        <section id="shopping-from">
          <h3 className="uppercase font-semibold hover:cursor-default">
            shopping from
          </h3>
          <ul>
            <li id="preferences">
              <p></p>
            </li>
            <li>
              <ul id="country-specific-sites">
                <li>
                  <a href="https://www.asos.com/es/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/de/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/au/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/fr/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/us/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/dk/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/it/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/nl/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/pl/"></a>
                </li>
                <li>
                  <a href="https://www.asos.com/se/"></a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      {/* 
      =======
      legal bar
      =======
      */}
      <div
        id="footer-legal-bar"
        className="bg-[#ddd] grid grid-cols-2 text-[#2d2d2d] py-2 px-5 h-[50px] items-center tracking-wider"
      >
        <p className="flex justify-start items-center px-3 text-[11px]">
          &#169; {new Date().getFullYear()} ASOS
        </p>
        <ul className="flex justify-end h-[18px] items-center text-[10px]">
          <li className="px-[10px]">Privacy & Cookies</li>
          <li className="border-l md:border-r border-[#2d2d2d] px-[10px]">
            Ts&Cs
          </li>
          <li className="px-[10px] hidden md:block">Accessibility</li>
        </ul>
      </div>
    </footer>
  );
}
