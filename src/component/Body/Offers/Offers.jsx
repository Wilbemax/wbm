import React from "react";
import styels from "./Offers.module.css";
import { Card } from "./Card/Card";
import bg1 from "../../../assets/bg.png";
import bg2 from "../../../assets/bg2.png";
import bg3 from "../../../assets/bg3.png";

export const Offers = () => {
  return (
    <div className={styels.Offers}>
      <div className={styels.wrapper}>
        <div className={styels.title}>
          Что наша комания готова вам предложить на основе ваших предпочтений{" "}
        </div>
        <div className={styels.wrapper_card}>
          <Card
            title="Современный дизайн"
            text="Разработаем уникальный дизайн, подходящий именно вам."
            bg={bg1}
          />
          <Card
            title="Современная разработка"
            text="Используем самые современные технологии и методики в наштх проектах."
            bg={bg2}
          />
          <Card
            title="Поддержка проекта"
            text="Предастовляем поддержку  вашему прооекту по договору."
            bg={bg3}
          />
          
        </div>
      </div>
    </div>
  );
};
