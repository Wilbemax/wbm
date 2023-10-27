import React, { useRef } from "react";
import styels from "./Form.module.css";
import { FormItem } from "./FormItem/FormItem";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { offersCardAnimations } from "../../animations/animations";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e)
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_q6sg8f8",
        "template_j0n93nb",
        form.current,
        "xSWgWwOwsnm9kxc3a"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
          alert("Обращение успешно отправленно ")
        },
        (error) => {
          console.log(error.text);
          alert("произошла какая-то ошибка по пробуйте позже")
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={offersCardAnimations}
      transition={{ duration: 0.7 }}
      className={styels.Form}
      id="lets_talk"
    >
      <div className={styels.wrapper}>
        <div className={styels.textBlock}>
          <p className={styels.title}>Обратитесь к нам за консультацией</p>
          <FormItem
            title="Остались ли у вас вопросы?"
            text="Пожалуйста, поделитесь с нами своими вопросами или комментариями, и мы свяжемся с вами как можно скорее."
          />
          <FormItem
            title="Быстрый ответ консультанта"
            text="Заполните форму и в ближайшее время с Вами свяжется консультант."
          />
          <FormItem
            title=" Ваш сайт - ваша история"
            text="Мы предоставляем персонализированный подход, который позволяет клиентам точно выразить свои запросы, чтобы создать уникальные веб-решения, соответствующие их потребностям."
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className={styels.form}>
            <div className={styels.FIO}>
              <div className={styels.inputWrapper}>
                <p className={styels.formTitle}>Имя</p>
                <input
                  name="user_name"
                  className={styels.input}
                  type="text"
                  required
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className={styels.inputWrapper}>
                <p className={styels.formTitle}>Фамилия</p>
                <input
                  name="user_seconName"
                  className={styels.input}
                  type="text"
                  required
                  placeholder="Введите вашу фамилию"
                />
              </div>
            </div>
            <div className={styels.wrapperBlock}>
              <div className={styels.inputWrapper}>
                <p className={styels.formTitle}>Почта</p>
                <input
                  name="user_email"
                  className={styels.input}
                  type="email"
                  required
                  placeholder="Введите вашу почту"
                />
              </div>
              <div className={styels.inputWrapper}>
                <p className={styels.formTitle}>Tелефон</p>
                <input
                  name="user_nomber"
                  className={styels.input}
                  required
                  type="text"
                  placeholder="Введите номер телефона"
                />
              </div>
            </div>
            <div className={styels.wrapTextArea}>
              <p className={styels.formTitle}>Как мы можем вам помочь?</p>
              <textarea
                className={styels.textArea}
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className={styels.button} type="submit">
              Отрправить заявку
            </button>
        </form>
      </div>
    </motion.div>
  );
};
