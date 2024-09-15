import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-10 text-lg flex items-center justify-between border-b-2 border-zinc-700">
      <div className="flex gap-36">
        <div className="flex items-center justify-center">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-20">
          {["Home", "Work", "", "News"].map((e, i) => {
            return e.length == 0 ? (
              <span className="inline-block w-[1px] h-8 bg-zinc-500"></span>
            ) : (
              <a>
                {i == 1 && (
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                )}
                {e}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 bg-white text-blue-800 py-2 px-4 rounded-full">
        <span className="text-sm">Start a Project</span>
        <IoIosReturnRight />
      </div>
    </div>
  );
};

export default Navbar;
