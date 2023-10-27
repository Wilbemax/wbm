import React from "react";
import styels from "./Offers.module.css";
import { Card } from "./Card/Card";
import bg1 from "../../../assets/bg.png";
import bg2 from "../../../assets/bg2.png";
import bg3 from "../../../assets/bg3.png";
import { motion } from "framer-motion";
import { offersTitleAnimations } from "../../animations/animations";

export const Offers = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={styels.Offers}
      id="why_we"
    >
      <div className={styels.wrapper}>
        <motion.div variants={offersTitleAnimations} transition={{ duration: 0.7 }}  className={styels.title}>
          Что наша компания готова предложить вам на основе ваших предпочтений{" "}
        </motion.div>
        <div className={styels.wrapper_card}>
          <Card
            title="Современный дизайн"
            text="Разработаем уникальный дизайн, подходящий именно вам."
            bg={bg1}
          />
          <Card
            title="Современная разработка"
            text="Используем самые современные технологии и методики в наших проектах."
            bg={bg2}
          />
          <Card
            title="Поддержка проекта"
            text="Предоставляем поддержку  вашему проекту по договору."
            bg={bg3}
          />
        </div>
      </div>
    </motion.div>
  );
};
