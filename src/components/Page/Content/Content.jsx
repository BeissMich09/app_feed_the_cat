import React from "react";
import CatElement from "./CatElement/CatElement";
import style from "./Content.module.css";

const Content = (props) => {
  let cat = props.catFoodData.map((catFood) => (
    <CatElement
      filling={catFood.filling}
      id={catFood.id}
      portion={catFood.portion}
      gift={catFood.gift}
      weight={catFood.weight}
    />
  ));
  return <div className={style.item}>{cat}</div>;
};

export default Content;
