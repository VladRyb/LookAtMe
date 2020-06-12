import React from "react";
import "./styles.css";
import ReactRotatingText from "react-rotating-text";

export default function LookAtMy() {
  return (
    <>
      <div className='lookatmy'>
        <p>
          Посмотри на мои
          <ReactRotatingText
            items={[
              " сандалики",
              " штанишечки",
              " рубашечки",
              " панамки",
              " шортики",
            ]}
          />
        </p>
        <br/>
        <p>...Я знаю тебе нравится</p>
      </div>
    </>
  );
}
