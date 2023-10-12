import React from "react";
import styels from "./Reviews.module.css";
import { Slider } from "./Slider/Slider";

export const Reviews = () => {
  return (
    <div className={styels.Reviews}>
      <div className={styels.wrapper}>
        <p className={styels.title}>Узнайте больше от Наших клиентов</p>
        <Slider className={styels.Slider}/>
      </div>
    </div>
  );
};
