import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ width, start, con, para }) => {
  return (
    <div className={`bg-[#121212] ${width} px-4 min-h-96 hover:bg-purple-600`}>
      <div className="flex mb-3 justify-between items-center mt-2 p-1">
        <h1>One Heading</h1>
        <span className="font-bold">
          <FaArrowRightLong />
        </span>
      </div>
      <div>
        <h1 className="text-2xl">Whatever Heading</h1>
      </div>
      <div className="mt-48">
        {start && (
          <h1 className="text-4xl mb-2 font-semibold">Start a Project</h1>
        )}
      </div>
      <div>
        {con && (
          <button className="bg-orange-400 hover:bg-orange-500 font-semibold px-4 py-2 rounded-full">
            Contact Us
          </button>
        )}
        {para && (
          <p className="text-lg opacity-50">
            This is a random sample Paragraph
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
