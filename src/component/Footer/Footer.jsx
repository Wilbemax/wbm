import React from "react";
import styels from "./Footer.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styels.Footer} id="contact">
      <div className={styels.wrapper}>
        <div className={styels.logo}>
          <p>WBM.company</p>
        </div>
        <div className={styels.contact}>
          <a href="mailto:wbm.company@mail.ru" rel="noreferrer" target="_blank">
            <HiOutlineMail className={styels.icon}/>
            wbm.company@mail.ru
          </a>
          <a
            href="https://web.telegram.org/k/#@jkdlon"
            rel="noreferrer"
            target="_blank"
          >
            <FaTelegramPlane className={styels.icon}/>
            Telegram
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=79219292776&text=Здравствуйте%2C+у+меня+есть+вопрос"
            rel="noreferrer"
            target="_blank"
          >
            <FaWhatsapp className={styels.icon}/>
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};
