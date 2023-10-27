import React from "react";
import styels from "./Nav.module.css";
import logo from "../../../assets/1213.png"
 

export const Nav = () => {
  return (
    <div className={styels.Nav}>
      <div className={styels.wrapper}>
        <div className={styels.logo}>
          {" "}
          <img className={styels.logos} src={logo} alt="WBM.company" />
        </div>
        <div className={styels.link_wrap}>
          <a className={styels.link} href="/#header">
            Главная
          </a>
          <a className={styels.link} href="/#why_we" >
            Почему мы?
          </a>
          <a className={styels.link} href="/#reviews">
            Отзывы
          </a>
          <a className={styels.link} href="/#lets_talk">
            Связаться
          </a>
          <a className={styels.link} href="/#contact">
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
}

