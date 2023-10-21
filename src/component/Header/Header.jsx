import React from "react";
import styels from "./Header.module.css";
import card from "../../assets/card10.png";
import "../../App.css";
import { Nav } from "./Nav/Nav";
import { motion } from "framer-motion";
import { headerCardAnimations, headerTextAnimations } from "../animations/animations";


export const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{  once: true }}
      className={styels.header}
    >
      <motion.div
      variants={headerTextAnimations}
      transition={{ duration: 0.7 }}>
      <Nav   />
      </motion.div>

      <div className={styels.wrapper}>
        <div className={styels.info}>
          <motion.div transition={{ duration: 0.7 }} variants={headerTextAnimations} className={styels.title}>
            Внимание к деталям - наш главнй приоритет
          </motion.div>
          <motion.div
            transition={{ duration: 0.9 }}
            
            variants={headerTextAnimations}
            className={styels.text}
          >
            Есть желание увеличить поток клиентов? Нам есть, что вам предложить.
            Тщательно разберемся именно в ваших нуждах и потребностях.
          </motion.div>
          <motion.div transition={{ duration: 1.1 }} variants={headerTextAnimations} className={styels.button}>
            <button src="/#contact" className={styels.button_send}><a href="/#contact">Оставить заявку</a></button>
            
          </motion.div>
        </div>
        <motion.div transition={{ duration: .7 }} variants={headerCardAnimations} className={styels.card}>
          <img className={styels.card_img} src={card} alt="" />
        </motion.div>
      </div>
      
    </motion.div>
  );
};
