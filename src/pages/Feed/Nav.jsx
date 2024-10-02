import React from "react";
import { navSections } from "./../../constants";
import { BiSolidDoorOpen } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Nav = () => {
  return (
    <nav className="flex flex-col justify-between items-end px-2 py-4">
      <div>
        <img src="x-logo.webp" alt="x-logo" className="w-14" />

        {navSections.map((i, key) => (
          <div
            key={key}
            className="flex items-center gap-3 text-2xl md:text-xl px-3 py-2 max-md:p-3 cursor-pointer rounded-lg transition hover:bg-[#505050b7] max-md:justify-center"
          >
            {i.icon}
            <span className="whitespace-nowrap max-md:hidden">{i.title}</span>
          </div>
        ))}
      </div>
      {/* kullanıcı bilgisi */}
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col items-center gap-2">
          <img src="" alt="user" className=" rounded-full max-w-[45px]" />
          <p className="max-md:hidden whitespace-nowrap">
            Mustafa Kemal Atatürk
          </p>
        </div>
        <button className="flex justify-center  items-center gap-2 text-2xl md:text-base p-1 bg-zinc-700 rounded transition hover:bg-zinc-900">
          <BiSolidDoorOpen />
          <span onClick={() => signOut(auth)} className="max-md:hidden">
            Çıkış Yap
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
