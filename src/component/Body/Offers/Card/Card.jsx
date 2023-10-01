import React from "react";
import styels from "./Card.module.css";
import { motion } from "framer-motion";
import { offersCardAnimations,offersCardTextAnimations } from "../../../animations/animations";

export const Card = (props) => {
  return (
    <motion.div
      initial="hidden"
      once={true}
      whileInView="visible"
      variants={offersCardAnimations}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3, once: true }}
      className={styels.Card}
    >
      <div className={styels.wrap}>
        <motion.div
        
          variants={offersCardTextAnimations}
          transition={{ duration: 0.6 }}
          className={styels.title}
        >
          {props.title}
        </motion.div>
        <motion.div variants={offersCardTextAnimations}
          transition={{ duration: 0.7 }} className={styels.text}>{props.text}</motion.div>
      </div>
      <img className={styels.bg} src={props.bg} alt="" />
    </motion.div>
  );
};
