import React from "react";
import styels from "./body.module.css";
import { Offers } from "./Offers/Offers";
import { Advantages } from "./Advantages/Advantages";
import { Reviews } from "./Reviews/Reviews";

export const Body = () => {
  return (
    <div className={styels.body}>
      <Offers />
      <Advantages />
      <Reviews/>
    </div>
  );
};
