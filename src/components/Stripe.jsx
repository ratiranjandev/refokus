import React from "react";

const Stripe = ({ data }) => {
  return (
    <div className="flex w-[calc(100%/6)] items-center justify-around border-b-[1px] border-r-[1px] border-t-[1px] border-zinc-800">
      <img className="w-32 h-16 object-cover" src={data.url} />
      <h2 className="text-lg font-semibold p-4">{data.count}</h2>
    </div>
  );
};

export default Stripe;
