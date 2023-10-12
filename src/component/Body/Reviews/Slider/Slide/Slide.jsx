import React from "react";
import styels from "./Slide.module.css";
import kov from "../../../../../assets/kov.png";

export const Slide = (props) => {
  return (
    <div className={styels.Slide}>
      <div className={styels.wrapper}>
        <div className={styels.img}>
          <img src={props.img} alt="Упсс... что-то пошло не так" />
        </div>
        <div className={styels.wrapText}>
          <img className={styels.kov}src={kov} alt="" />
          <div className={styels.text}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};
