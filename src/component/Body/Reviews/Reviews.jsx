import React from "react";
import styels from "./Reviews.module.css";
import { Slider } from "./Slider/Slider";
import { motion } from "framer-motion";
import { offersCardAnimations } from "../../animations/animations";

export const Reviews = () => {
  return (
    <div className={styels.Reviews}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        variants={offersCardAnimations}
          transition={{ duration: 0.7 }}
        className={styels.wrapper}
      >
        <motion.p
          variants={offersCardAnimations}
          transition={{ duration: 0.4 }}
          className={styels.title}
        >
          Узнайте больше от Наших клиентов
        </motion.p>
        <div>
          <Slider className={styels.Slider} />
        </div>
      </motion.div>
    </div>
  );
};
