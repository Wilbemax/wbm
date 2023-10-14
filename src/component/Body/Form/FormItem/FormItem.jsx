import React from "react";
import styels from "./FormItem.module.css";
import { FiCheck } from "react-icons/fi";

export const FormItem = (props) => {
  return (
    <div className={styels.FormItem}>
      <h1 className={styels.title}>
        <FiCheck className={styels.icon} />
        {props.title}
      </h1>
      <p className={styels.text}>{props.text}</p>
    </div>
  );
};
