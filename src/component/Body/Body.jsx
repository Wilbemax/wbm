import React from "react";
import styels from "./body.module.css";
import { Offers } from "./Offers/Offers";
import { Advantages } from "./Advantages/Advantages";
import { Reviews } from "./Reviews/Reviews";
import { Form } from "./Form/Form";

export const Body = () => {
  return (
    <div className={styels.body}>
      <Offers />
      <Advantages />
      <Reviews/>
      <Form/>
    </div>
  );
};
