import React from 'react'
import styels from "./Header.module.css"
import card from "../../assets/card.png"
import { Nav } from './Nav/Nav'

export const Header = () => {
  return (
    <div className={styels.header}>
        <Nav/>
        <div className={styels.wrapper}>
            <div className={styels.info}>
                <div className={styels.title}>Внимание к деталям - наш главнй приоритет</div>
                <div className={styels.info}>Есть желание увеличить поток клиентов? Нам есть, что вам предложить. Тчательно разберемся именно в ваших нуждах и потребностях</div>
                <div className={styels.button}>
                    <button className={styels.button_send}>Оставить заявку</button>
                    <button className={styels.button_moreinf}>О комапании</button>

                </div>
            </div>
            <div className={styels.card}>
                <img src={card} alt="" />
            </div>
        </div>
    </div>
  )
}
