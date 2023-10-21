import React from "react";
import { AboutT } from "./textCard/AboutT";
import styels from "./Advantages.module.css";
import svg1 from "../../../assets/imgB1.png";
import svg2 from "../../../assets/imgB2.png";
import svg3 from "../../../assets/imgB3.png";
import { motion } from "framer-motion";
import {
  offersCardAnimations,
  offersTitleAnimations,
} from "../../animations/animations";

export const Advantages = () => {
  return (
    <div className={styels.Advantages} id="why_we">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        className={styels.wrapper}
      >
        <motion.div
          variants={offersTitleAnimations}
          transition={{ duration: 0.7 }}
          className={styels.textBlock}
        >
          <AboutT
            title="Уменьшаем затраты средств и времени на поиска клиентов"
            item1="Эффективные решения рабочих процессов"
            item2="Простота в использовани"
            item3="Внедрение процессов разной сложности"
          />
        </motion.div>
        <motion.div
          variants={offersCardAnimations}
          transition={{ duration: 0.7 }}
          className={styels.imgBlock}
        >
          <img className={styels.img}src={svg1} alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        className={`${styels.wrapper} ${styels.wrapper2}`}
      >
        <motion.div
          variants={offersCardAnimations}
          transition={{ duration: 0.7 }}
          className={styels.imgBlock}
        >
          <img className={styels.img} src={svg2} alt="" />
        </motion.div>
        <motion.div
          variants={offersTitleAnimations}
          transition={{ duration: 0.7 }}
          className={styels.textBlock}
        >
          <AboutT
            title="Завоюйте больше клиентов в долгосрочном бизнесе"
            item1="Оптимизирование времени "
            item2="Простые в использовании инструменты"
            item3="Привлечение новых клиентов"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
        className={styels.wrapper}
      >
        <motion.div
          variants={offersTitleAnimations}
          transition={{ duration: 0.7 }}
          className={styels.textBlock}
        >
          <AboutT
            title="Расширяйте свою клиентскую базу
            проще, чем раньше"
            item1="Эффективные и индивидуальные решения"
            item2="Простота в использовании без навыков разработки"
            item3="Создание интеграций"
          />
        </motion.div>
        <motion.div
          variants={offersCardAnimations}
          transition={{ duration: 0.7 }}
          className={styels.imgBlock}
        >
          <img className={styels.img} src={svg3} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};
