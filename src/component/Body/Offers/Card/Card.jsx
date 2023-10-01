import React from "react";
import styels from "./Card.module.css";

export const Card = (props) => {
  return (
    <div className={styels.Card}>
      <div className={styels.wrap}>
        <div className={styels.title}>{props.title}</div>
        <div className={styels.text}>{props.text}</div>
      </div>
      <img className={styels.bg} src={props.bg} alt="" />
    </div>
  );
};
