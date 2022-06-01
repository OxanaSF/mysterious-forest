import { motion } from "framer-motion";

import PineConeGold from "../../assets/images/pine-cone-gold.png";
import AcornGold from "../../assets/images/acorn.png";
import LotusGold from "../../assets/images/lotus-gold.png";

export const totalResultInit = (
  <div className="lines">
    <div className="line">
      <motion.img
        src={PineConeGold}
        className="pine"
        alt="pine cone gold"
        initial={{ opacity: 0 }}
      />
    </div>

    <div className="line">
      <motion.img
        src={LotusGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
      />
    </div>

    <div className="line">
      <motion.img
        src={AcornGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
      />
    </div>
  </div>
);

export const totalResultEasy = (
  <div className="lines">
    <div className="line">
      <motion.img
        src={PineConeGold}
        className="pine"
        alt="pine cone gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 2 }}
      />
    </div>

    <div className="line">
      <motion.img
        src={LotusGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
      />
    </div>

    <div className="line">
      <motion.img
        src={AcornGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
      />
    </div>
  </div>
);

export const totalResultMedium = (
  <div className="lines">
    <div className="line">
      <motion.img
        src={PineConeGold}
        className="pine"
        alt="pine cone gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 2 }}
      />
    </div>

    <div className="line">
      <motion.img
        src={LotusGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 2 }}
      />
    </div>

    <div className="line">
      <motion.img
        src={AcornGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
      />
    </div>
  </div>
);

export const totalResultHard = (
  <motion.div className="lines">
    <div className="line">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 3,
          type: "tween",
        }}

        src={PineConeGold}
        className="pine"
        alt="pine cone gold"
      />
    </div>

    <div className="line">
      <motion.img
       transition={{
        delay: 3,
        duration: 3,
        type: "tween",
      }}

        src={LotusGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>

    <div className="line">
      <motion.img
       transition={{
        delay: 4,
        duration: 3,
        type: "tween",
      }}

        src={AcornGold}
        className="lotus"
        alt="acorn gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  </motion.div>
);
