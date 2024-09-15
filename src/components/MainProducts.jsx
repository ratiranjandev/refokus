import React, { useState } from "react";
import Main_Product from "./Main_Product";
import { motion } from "framer-motion";
import videoSource1 from "../../utils/videos/Cula_promo_new_4_3.mp4";
import videoSource2 from "../../utils/videos/Maniv-Compressed.mp4";
import videoSource3 from "../../utils/videos/cityframe.mp4";

const MainProducts = () => {
  const main_product = [
    {
      heading: ["Sample4", "Products 4"],
      url: "https://media.istockphoto.com/id/522356639/photo/cross-processed-vintage-fashion-portrait.jpg?s=612x612&w=0&k=20&c=Gyli4lFqmifC1ktMjMcg2SM_VbdIkJLkExDWxx23-Cs=",
      description: "",
      first: true,
      last: false,
    },
    {
      heading: ["Sample5", "Products 5"],
      url: "https://media.istockphoto.com/id/1992160016/photo/photo-of-young-girl-standing-isolated-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=-genI63wiUXBOdVF4xybpAbhTpAsdZk-7lQaBS_5Vi0=",
      description: "",
      first: true,
      last: false,
    },
    {
      heading: ["Sample6", "Products 6"],
      url: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
      description: "",
      first: true,
      last: false,
    },
  ];

  const [pose, setPose] = useState(0);

  const mover = (val) => {
    setPose(val * 24);
  };

  return (
    <div className="mt-32 relative max-w-screen-xl mx-auto  ">
      {main_product.map((e, i) => (
        <Main_Product data={e} mover={mover} index={i} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pose, x: "-50%" }}
          animate={{ y: pose + `rem` }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
          className="window overflow-hidden absolute left-[50%] w-96 h-[24rem]"
        >
          <motion.div
            animate={{ y: -pose + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video controls autoPlay loop muted className="w-full h-full">
              <source src={videoSource1} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pose + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video controls autoPlay loop muted className="w-full h-full">
              <source src={videoSource2} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pose + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video controls autoPlay loop muted className="w-full h-full">
              <source src={videoSource3} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainProducts;
