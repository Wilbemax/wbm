import React from "react";
import styels from "./Nav.module.css";
 

export const Nav = () => {
  return (
    <div className={styels.Nav}>
      <div className={styels.wrapper}>
        <div className={styels.logo}>
          {" "}
          WBM<p className={styels.logo_dot}>.company</p>
        </div>
        <div className={styels.link_wrap}>
          <a className={styels.link} href="/#header">
            Главая
          </a>
          <a className={styels.link} href="/#why_we" >
            Почему мы
          </a>
          <a className={styels.link} href="/#reviews">
            Отзывы
          </a>
          <a className={styels.link} href="/#lets_talk">
            Связаться
          </a>
          <a className={styels.link} href="/#contact">
            Контанкты
          </a>
        </div>
      </div>
    </div>
  );
}

