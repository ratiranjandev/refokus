import React, { useState } from "react";

const Produwwct = ({ data }) => {
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const handlePosition = (e) => {
    console.log(e.clientX, e.clientY);
    setPosition({ left: e.clientX, top: e.clientY });
  };
  return (
    <div className="outer w-full mt-10 mb-9">
      <div
        onMouseEnter={() => setOpacity(100)}
        onMouseLeave={() => setOpacity(0)}
        onMouseMove={(e) => handlePosition(e)}
        className="inner transition-all relative flex flex-col items-center justify-center max-w-screen-xl mx-auto border-[1px] border-zinc-500 p-2 h-[20rem]"
      >
        <h1 className="z-10 mix-blend-difference text-[2vw] font-semibold">
          Sample Heading
        </h1>
        <h1 className="z-10 mix-blend-difference text-[4vw] font-semibold">
          Products List
        </h1>
        <img
          className={`opacity-${opacity} fixed w-[250px] h-[250px] object-cover object-center rounded-full`}
          style={{ left: position.left + "px", top: position.top + "px" }}
          src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJyb3d8ZW58MHx8MHx8fDA%3"
        />
      </div>
    </div>
  );
};

export default Produwwct;
