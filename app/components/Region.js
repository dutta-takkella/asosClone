import Image from "next/image";
import fullFlag from "../../public/fullFlag.png";

export default function Region() {
  return (
    <div className="hidden lg:block">
      <div id="region" className="pr-7 text-[13px] h-[30px]">
        <ul className="grid grid-cols-[120px_120px_50px] gap-x-0 justify-end align-baseline text-[#666] grid-rows-1">
          <li className="hover:text-[#0770cf] hover:cursor-pointer border-x border-[rgb(221,221,221)] flex justify-center align-middle p-1">
            Markertplace
          </li>
          <li className="hover:text-[#0770cf] hover:cursor-pointer flex justify-center align-middle p-1">
            Help & FAQs
          </li>
          <li className="w-full hover:cursor-pointer border-x border-[rgb(221,221,221)] flex justify-center align-middle p-1">
            <Image
              src={fullFlag}
              width={15}
              height={15}
              alt="Indian-flag"
              className="object-center hover:border rounded-full hover:border-[#0770cf]  m-[3px]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
