import React from "react";
import style from "./Page.module.css";
import background from "./../../assets/img/fon.jpg";
import Content from "./Content/Content";
import catFoodData from "./../../InitialeState";

const Page = () => {
  return (
    <div>
      <h1>Ты сегодня покормил кота?</h1>
      <div className={style.item}>
        <img src={background} alt="" />
      </div>
      <Content catFoodData={catFoodData} />
    </div>
  );
};

export default Page;
