import React from "react";
import styels from "./Header.module.css";
import card from "../../assets/card10.png";
import "../../App.css";
import { Nav } from "./Nav/Nav";
import { motion } from "framer-motion";

const textAnimations = {
  delay: 0.5,
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    
    
  },
};
const cardAnimations = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={styels.header}
    >
      <Nav />

      <div className={styels.wrapper}>
        <div className={styels.info}>
          <motion.div transition={{ duration: 0.7 }} variants={textAnimations} className={styels.title}>
            Внимание к деталям - наш главнй приоритет
          </motion.div>
          <motion.div
            transition={{ duration: 0.9 }}
            
            variants={textAnimations}
            className={styels.text}
          >
            Есть желание увеличить поток клиентов? Нам есть, что вам предложить.
            Тчательно разберемся именно в ваших нуждах и потребностях.
          </motion.div>
          <motion.div transition={{ duration: 1.1 }} variants={textAnimations} className={styels.button}>
            <button className={styels.button_send}>Оставить заявку</button>
            <button className={styels.button_moreinf}>О комапании</button>
          </motion.div>
        </div>
        <motion.div transition={{ duration: .7 }} variants={cardAnimations} className={styels.card}>
          <img className={styels.card_img} src={card} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};
