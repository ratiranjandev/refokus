import React from "react";

const Main_Product = ({ data, mover, index }) => {
  return (
    <div onMouseEnter={() => mover(index)} className="w-full ">
      <div className="flex items-center justify-between h-[24rem]">
        <div className="p-4">
          <h1 className="text-3xl text-cyan-600 opacity-30 font-semibold leading-none tracking-tight">
            {data.heading[0]}
          </h1>
          <h1 className="text-7xl font-semibold leading-none tracking-tight">
            {data.heading[1]}
          </h1>
        </div>
        <div className="relative flex flex-col items-end justify-between gap-5 px-6 py-3">
          <p className="text-right font-semibold text-1xl w-[400px]">
            Happy the Boss In Tailwind CSS, you can create text masks using the
            mask utilities. Text masking is a technique that allows you to
            display text using an image to define its shape. Here's how you can
            achieve text masking in Tailwind
          </p>
          {data.first && (
            <button className="bg-cyan-600 w-fit px-4 py-2 rounded-lg text-lg font-semibold">
              Start Coding
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main_Product;
