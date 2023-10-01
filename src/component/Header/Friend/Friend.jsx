import React from "react";
import styels from "./Friend.module.css";
import logo from "../../../assets/logo1.png";
import logo1 from "../../../assets/logo2.png";
import logo2 from "../../../assets/logo3.png";
import logo3 from "../../../assets/logo6.png";

export const Friend = () => {
  return (
    <div className={styels.Friend}>
      <div className={styels.wrapper}>
        <div className={styels.wrapper_inner}>
          <div className={styels.inner}>
            <div className={styels.logos}>
              <img src={logo} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />

            </div>
            <div className={styels.title}>
              <p className={styels.text}>
                Начните сотрудничество с{" "}
                <p className={styels.logo}>
                  {" "}
                  WBM<p className={styels.company}>.company</p>
                </p>
                , чтобы попасть в этот список
              </p>
            </div>
          </div>
        </div>
        <div className={styels.wrapper_inner}>
          <div className={styels.inner}>
            <div className={styels.logos}>
              <img src={logo} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
            <div className={styels.title}>
              <p className={styels.text}>
                Начните сотрудничество с{" "}
                <p className={styels.logo}>
                  {" "}
                  WBM<p className={styels.company}>.company</p>
                </p>
                , чтобы попасть в этот список
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
