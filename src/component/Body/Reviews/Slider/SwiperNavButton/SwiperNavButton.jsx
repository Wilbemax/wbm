import React from "react";
import { useSwiper } from "swiper/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import styels from "./SwiperNavButton.module.css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styels.wrapper}>
      <div className={styels.iconBorder}onClick={() => swiper.slidePrev()}>
        <IoArrowBack className={styels.icon} />
      </div>
      <div onClick={() => swiper.slideNext()}>
       <p><IoArrowForward className={styels.icon} /></p>
      </div>
    </div>
  );
};
