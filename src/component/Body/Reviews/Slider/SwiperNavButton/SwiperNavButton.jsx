import React from "react";
import { useSwiper } from "swiper/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import styels from "./SwiperNavButton.module.css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styels.wrapper}>
      
        <button onClick={() => swiper.slidePrev()} className={styels.button}>
          <IoArrowBack className={styels.icon} />
        </button>
        <button onClick={() => swiper.slideNext()} className={styels.button}>
          <IoArrowForward className={styels.icon} />
        </button>
      
    </div>
  );
};
