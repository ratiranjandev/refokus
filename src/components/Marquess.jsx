import React from "react";

const Marquess = ({ data }) => {
  return (
    <div className="flex justify-evenly">
      {data.map((e) => (
        <img src={e} />
      ))}
    </div>
  );
};

export default Marquess;
