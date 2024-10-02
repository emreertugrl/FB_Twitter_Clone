import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, isOpen, close }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-zinc-700/70 grid place-items-center z-[9999]">
        <div className="bg-black py-10 px-8 w-3/4 max-w-[600px]  rounded-md">
          <div className="flex justify-end">
            <button
              onClick={close}
              className="border  hover:border-gray-400 hover:text-gray-500"
            >
              <IoMdClose className="text-3xl transition " />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
