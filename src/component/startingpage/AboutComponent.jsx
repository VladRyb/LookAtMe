import React from "react";
import "./styles.css";

export default function AboutComponent() {
  return (
    <>
      <h2 className="olesyaHeader">
        <b>LookAtMe</b>
      </h2>
      <div className="aboutContainer">
        <p>
          Добро пожаловать в виртуальный дом для Ваших вещей
          <br />
          Сфотографируйте Вашу одежду и ваш шкаф будет всегда с Вами
          <br />
          Больше не нужно помнить, какие рубашки висят в гардеробной
          <br />
        </p>
      </div>
    </>
  );
}
