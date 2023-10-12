import React from "react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./Slide/Slide";
import girl1 from "../../../../assets/girl.png";
import girl2 from "../../../../assets/wo.png";
import man1 from "../../../../assets/men1.png"
import man2 from "../../../../assets/64b91c8e72782f01aacc6706_Testimonial member3 1.png"

import styels from "./Slider.module.css";

export const Slider = () => {
  return (
    <div className={styels.Swiper}>
      {" "}
      <Swiper
        
        modules={[Navigation, Pagination, A11y]}
        pagination={true}
        slidesPerView="auto"
      >
        <SwiperSlide className={styels.Swiper}>
          {" "}
          {
            <Slide
              img={girl1}
              text="“Мы обратились к ним с проектом сложного 
корпоративного сайта. С самого начала
команда проявила внимательное 
отношение к нашему проекту, разработала 
уникальный и потрясающий дизайн, 
который отражал наш бренд и радовал 
наших клиентов. Особо хочется отметить
эффективную связь во время всего процесса.”"
            />
          }{" "}
        </SwiperSlide>
        <SwiperSlide
        className={styels.Swiper}>
          {" "}
          {
            <Slide
              img={man1}
              text="“Хочу выразить свою глубокую благодарность и восхищение команде WBM за их невероятную работу над наши сайтом. Это было незабываемое партнерство, в результате которого мы получили высококачественный и профессиональный веб-сайт, полностью отражающий нашу компанию.”"
            />
          }{" "}
        </SwiperSlide>
        <SwiperSlide
        className={styels.Swiper}>
          {" "}
          {
            <Slide
              img={girl2}
              text="“С самого начала сотрудничества мы ощутили энтузиазми внимание, которые WBM вкладывает в каждый проек. Наша команда работала напрямую с их экспертами, и они проявили чрезвычайное понимание наших потребностей и целей.”"
            />
          }{" "}
        </SwiperSlide>
        <SwiperSlide
        className={styels.Swiper}>
          {" "}
          {
            <Slide
              img={man2}
              text="““Ни у кого не вызывает сомнений, что техническая поддержкаот этой компании на высшем уровне. Всвозникшие технические вопросы решались оперативно и профессионально.””"
            />
          }{" "}
        </SwiperSlide>

        {/* <SwiperNavButtons /> */}
      </Swiper>
    </div>
  );
};
