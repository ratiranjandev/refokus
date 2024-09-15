import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-xl mt-32 p-1 mx-auto flex gap-20">
      <div>
        <h1 className="text-[200px] text-left mt-16 leading-none tracking-tight">
          Unique Websites
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between">
        <img
          className="w-10 h-10"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg"
        />
        <p className="w-[300px] text-right">
          Refokus is a forward-thinking web agency that combines design and
          Webflow development to create cool websites that help brands position
          themselves as market leaders
        </p>
      </div>
    </div>
  );
};

export default Home;
