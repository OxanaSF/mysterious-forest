import React from "react";
import { FinalPageStyled } from "./FinalPageStyled";
import { motion } from "framer-motion";

import Navbar from "../Navbar";

import goldTreeImg from "../../assets/images/gold-tree.png";

import PineConeGold from "../../assets/images/pine-cone-gold.png";
import LotusGold from "../../assets/images/lotus-gold.png";
import AcornGold from "../../assets/images/acorn.png";

const FinalPage = (props) => {
  return (

    <FinalPageStyled >

      <img
        className="key gold-pine"
        src={PineConeGold}
        alt="gold pine cone"
      />

      <img
        className="key gold-lotus"
        src={LotusGold}
        alt="gold pine cone"
      />

      <img 
        className="key gold-acorn" 
        src={AcornGold} 
        alt="gold acorn" />

      {/* Central Exit Button */}
      <div className="central-key">
        <motion.img
          className="key-exit"
          src={goldTreeImg}
          alt="gold tree emblem"
          animate={{
            opacity: 1,
            rotateZ: 360,
          }}
          transition={{
            delay: 13,
            duration: 9,
            type: "tween",
          }}
        />
      </div>

      
      <h1 className="key text">
      <Navbar />
      The way is open!
      </h1>

      

    </FinalPageStyled>
  );
};


export default FinalPage;
