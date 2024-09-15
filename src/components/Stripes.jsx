import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  const stripes = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8YygafmU66oauzMpBjl4Uu07hrEyYzxkGw&s",
      count: 11,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua-sdnre0574d7xPr5-HMqjA02k00IyZ7tQ&s",
      count: 9,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh3spvSrE6YFYFOS8BPtvM88OGNlKAXafZQ&s",
      count: 55,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAdIsEesB679q1786kQWMlaTFHvfVkDqEcw&s",
      count: 10,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNxdQIrMNqr3ediDOzISxrUAgvKCKmFXqUg&s",
      count: 8,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKvxO4WzciW-BfLHpRLgDoAt0Txhek86ERg&s",
      count: 48,
    },
  ];
  return (
    <div className="flex items-center mt-20">
      {stripes.map((e, i) => (
        <Stripe data={e} />
      ))}
    </div>
  );
};

export default Stripes;
