import React from "react";
import CatElement from "./CatElement/CatElement";
import style from "./Content.module.css"
const Content = () => {
  return (
    <div className={style.item}>
      <CatElement />
      <CatElement />
      <CatElement />
    </div>
  );
};

export default Content;
