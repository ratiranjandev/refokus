import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquee from "./components/Marquee";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import MainProducts from "./components/MainProducts";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  const handleCursor = (e) => {
    setCursorPosition({ left: e.clientX, top: e.clientY });
  };
  
  return (
    <div
      onMouseMove={(e) => handleCursor(e)}
      className="relative cursor-none w-full h-full py-10 bg-zinc-900 text-white"
    >
      <div
        className={`fixed w-5 h-5 z-10 mix-blend-difference rounded-full bg-green-500`}
        style={{
          left: `${cursorPosition.left}px`,
          top: `${cursorPosition.top}px`,
        }}
      ></div>
      <Navbar />
      <Work />
      <Stripes />
      <MainProducts />
      <Products />
      <Marquee />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
