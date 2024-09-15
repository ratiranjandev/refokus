import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full mt-16 p-2">
      <div className="max-w-screen-xl mx-auto p-4 flex gap-5 items-center justify-between">
        <Card width={"basis-1/3"} start={true} con={false} para={false} />
        <Card width={"basis-2/3"} start={false} con={true} para={true} />
      </div>
    </div>
  );
};

export default Cards;
