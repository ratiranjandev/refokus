import React, { useState } from "react";

const Product = ({ data }) => {
  const [imgPosition, setImgPosition] = useState({ left: 0, top: 0 });
  const handleImage = (e) => {
    console.log(e.clientX, e.clientY);
    setImgPosition({ left: e.clientX, top: e.clientY });
  };

  return (
    <>
      <div
        onMouseMove={(e) => handleImage(e)}
        className="relative m-24 bg-red-300 "
      >
        <div className="flex items-center justify-between max-w-screen-xl mx-auto py-5">
          <div className="p-4">
            <h1 className="z-10 text-3xl text-green-600 opacity-30 font-semibold leading-none tracking-tight">
              {data.heading[0]}
            </h1>
            <h1 className="z-10 text-7xl font-semibold leading-none tracking-tight">
              {data.heading[1]}
            </h1>
          </div>
          <div className="relative flex flex-col items-end justify-between gap-5 px-6 py-3">
            <p className="text-right font-semibold text-1xl w-[500px]">
              In Tailwind CSS, you can create text masks using the mask
              utilities. Text masking is a technique that allows you to display
              text using an image to define its shape. Here's how you can
              achieve text masking in Tailwind CSS
            </p>
            {data.first && (
              <button className="bg-green-600 w-fit px-4 py-2 rounded-lg text-lg font-semibold">
                Start Coding
              </button>
            )}
          </div>
        </div>
        <div
          className={`opacity-0 hover:opacity-100 transition duration-150 ease-out hover:ease-in w-60 h-60 overflow-hidden rounded-full fixed transform -translate-x-1/2 -translate-y-1/2`}
          style={{ left: imgPosition.left, top: imgPosition.top }}
        >
          <img className="object-cover h-full w-full" src={data.url} />
        </div>
      </div>
    </>
  );
};

export default Product;
