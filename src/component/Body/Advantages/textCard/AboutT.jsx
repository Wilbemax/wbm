import React from "react";
import styels from "./AboutT.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const AboutT = (props) => {
  return (
    <div className={styels.AboutT}>
      <p className={styels.title}>{props.title}</p>
      <div className={styels.listWrapper}>
        <div className={styels.item}>
          <BsFillCheckCircleFill className={styels.svg} /> <p className={styels.text}>{props.item1}</p>
        </div>
        <div className={styels.item}>
          <BsFillCheckCircleFill className={styels.svg} /> <p className={styels.text}>{props.item2}</p>
        </div>
        <div className={styels.item}>
          <BsFillCheckCircleFill className={styels.svg} /> <p className={styels.text}>{props.item3}</p>
        </div>
        
      </div>
      <button className={styels.button}>
      <a href="/#lets_talk">Связаться с нами</a>
      </button>
    </div>
  );
};
