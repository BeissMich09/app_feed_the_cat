import React from "react";
import cat from "./../../../../assets/img/cat.png";
import style from "./CatElement.module.css";

const CatElement = (props) => {
  return (
    <div className={style.contentItem}>
      <div className={style.item}>
        <div className={style.triangle}></div>
        <div className={style.text}>
          <p>Сказочное заморское яство</p>
          <h3>Нямушка</h3>
          <h4>{props.filling}</h4>
          <p>{props.portion} порций</p>
          <p>{props.gift}</p>
        </div>
        <img src={cat} alt="" />
        <div className={style.containerForBall}>
          <div className={style.ball}>
            <div className={style.textBall}>
              <p>{props.weight}</p>
              <p>кг</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.undergroundText}>
        <p>
          Чего сидишь? Порадуй котэ, <span>купи</span>.
        </p>
      </div>
    </div>
  );
};

export default CatElement;
