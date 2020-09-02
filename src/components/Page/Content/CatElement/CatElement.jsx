import React from "react";
import cat from "./../../../../assets/img/cat.png";
import style from "./CatElement.module.css";
import cn from "classnames";

class CatElement extends React.Component {
  state = {
    basket: false,
    showUpdateRow: false,
  };
  pickElement = () => {
    if (!this.state.basket) {
      this.setState({ basket: true });
    } else {
      this.setState({ basket: false });
    }
  };

  undergroundText = () => {
    if (this.state.basket) {
      return <p>{this.props.description}</p>;
    } else if (!this.props.presence) {
      return <p>{this.props.disabledFood}</p>;
    } else {
      return (
        <p>
          Чего сидишь? Порадуй котэ,{" "}
          <span onClick={this.pickElement}>купи</span>
        </p>
      );
    }
  };

  showHideUpdateRow = () => {
    if (!this.state.showUpdateRow) {
      this.setState({ showUpdateRow: true });
    } else {
      this.setState({ showUpdateRow: false });
    }
  };

  render() {
    return (
      <div
        onMouseLeave={this.props.presence ? this.showHideUpdateRow : () => {}}
        className={cn({
          [style.inBasket]: this.state.basket,
          [style.contentItem]: !this.state.basket,
          [style.disabledElement]: !this.props.presence,
          [style.unHoverDefualt]:
            this.state.showUpdateRow === true && this.state.basket === false,
          [style.unHoverBasket]:
            this.state.showUpdateRow === true && this.state.basket === true,
        })}
      >
        <div
          className={!this.props.presence ? style.withFog : style.withoutFog}
        >
          <div
            onClick={this.props.presence ? this.pickElement : () => {}}
            className={style.item}
          >
            <div className={style.triangle}></div>
            <div className={style.text}>
              <p>Сказочное заморское яство</p>
              <h3>Нямушка</h3>
              <h4>{this.props.filling}</h4>
              <p>{this.props.portion} порций</p>
              <p>{this.props.gift}</p>
            </div>
            <img src={cat} alt="" />
            <div className={style.containerForBall}>
              <div className={style.ball}>
                <div className={style.textBall}>
                  <p>{this.props.weight}</p>
                  <p>кг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.undergroundText}>{this.undergroundText()}</div>
      </div>
    );
  }
}

export default CatElement;
