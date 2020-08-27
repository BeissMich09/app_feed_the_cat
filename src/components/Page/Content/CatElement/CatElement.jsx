import React from "react";
import cat from "./../../../../assets/img/cat.png";
import style from "./CatElement.module.css";

const CatElement = () => {
  return (
    <div className={style.contentItem}>
      <div className={style.item}>
        <div className={style.triangle}></div>
        <div className={style.text}>
          <p>Сказочное заморское яство</p>
          <h3>Нямушка</h3>
          <h4>с фуа-гра</h4>
          <p>10 порций</p>
          <p>мышь в подарок</p>
        </div>
        <img src={cat} alt="" />
        <div className={style.containerForBall}>
          <div className={style.ball}></div>
        </div>
      </div>
    </div>
  );
};

export default CatElement;
