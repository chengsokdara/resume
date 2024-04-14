import bookmarkShape from "@/assets/svg/bookmark.svg";
import data from "@/data";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row">
      <div className="flex justify-center self-start mt-2">
        <Image alt="Bookmark Shape" src={bookmarkShape} />
        <h3 className="absolute font-mont font-bold text-xs text-white uppercase mt-5">
          Resume
        </h3>
      </div>
      <div className="px-5">
        <h1 className="font-mont-sub font-bold text-[2.25rem] leading-[2.75rem]">
          {data.firstName}
          <br />
          <span>{data.lastName}</span>
        </h1>
        <hr className="w-9 h-1 bg-primary my-2" />
        <h2 className="font-mont-sub text-black/75 text-base">{data.title}</h2>
      </div>
    </div>
  );
}
