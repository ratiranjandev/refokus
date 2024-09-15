import React, { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      top: "45%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1557858310-9052820906f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D",
      top: "50%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1674718013659-6930c469e641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D",
      top: "55%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1542586484-1ba19fe1ad53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1631270315847-f418bde47ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVydGlzaW5nfGVufDB8fDB8fHww",
      top: "60%",
      left: "47%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    const imageShow = (arr) => {
      setImages((prev) =>
        prev.map((e, i) =>
          arr.indexOf(i) == -1
            ? { ...e, isActive: false }
            : { ...e, isActive: true }
        )
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 5:
        imageShow([0, 1, 2, 3]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div>
      <div className="w-full">
        <div className="heading relative max-w-screen-xl mx-auto">
          <h1 className="text-[30vw] text-center font-semibold leading-none tracking-tight font-mono">
            Work
          </h1>
          <div className="absolute w-full h-full top-0">
            {images.map(
              (e, i) =>
                e.isActive && (
                  <img
                    key={i}
                    className="absolute w-72 h-52 object-cover rounded-lg -translate-x-[50%] -translate-y-[50%]"
                    src={e.url}
                    style={{ left: e.left, top: e.top }}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
