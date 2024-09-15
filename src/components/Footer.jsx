import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto flex gap-6 px-3 min-h-96">
      <div className="flex flex-col w-1/2">
        <h1 className="text-[20vh] w-full h-2/3">refokus.</h1>
        <div className="mt-5 ml-3 flex gap-8 font-semibold">
          <a className="opacity-60">Privacy Policy</a>
          <a className="opacity-60">Cookies Policy</a>
          <a className="opacity-60">Impressum</a>
          <a className="opacity-60">Terms</a>
        </div>
      </div>
      <div className="w-1/2 mt-10">
        <div className="mt-5 mb-3 ml-3 flex gap-16 font-bold">
          <a className="opacity-40">Social</a>
          <a className="opacity-40">SiteMap</a>
        </div>
        <div className="flex">
          <div className="flex flex-col p-3 gap-2">
            <a className="opacity-40">Instagram</a>
            <a className="opacity-40">Twitter</a>
            <a className="opacity-40">LinkedIn</a>
          </div>
          <div className="flex flex-col ml-6 gap-2 mt-3">
            <a>Home</a>
            <a>Work</a>
            <a>Careers</a>
            <a>Contact</a>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-5 justify-center items-center p-5  text-right">
              <p className="tracking-tight">
                To achieve the achieve the desired behavior where the image is
                initially hidden but displayed on hover
              </p>
              <button className="bg-green-500 px-4 py-2 mt-1 rounded-lg font-medium">
                Enterprise Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
