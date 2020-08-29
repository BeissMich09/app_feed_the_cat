import React from "react";
import style from "./Page.module.css";
import background from "./../../assets/img/fon.jpg";
import Content from "./Content/Content";

const Page = () => {
  let catFoodData = [
    {
      id: 1,
      filling: "с фуа-гра",
      portion: 10,
      gift: "мышь в подарок",
      weight: "0,5",
      presence: true,
      basket: false,
    },
    {
      id: 2,
      filling: "с рыбой",
      portion: 40,
      gift: "2 мыши в подарок",
      weight: "2",
      presence: true,
      basket: false,
    },
    {
      id: 3,
      filling: "с курой",
      portion: 100,
      gift: "10 мышей в подарок",
      weight: "5",
      presence: true,
      basket: false,
    },
  ];

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
