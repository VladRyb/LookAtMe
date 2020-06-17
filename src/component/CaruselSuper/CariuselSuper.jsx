import React from "react";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";
import { useState } from "react";
import { Image } from "react-bootstrap";

function CariuselSuper() {
  const [state, setState] = useState({
    active: 0,
  });

  function _handleClick() {
    var num = Math.floor(Math.random() * 10 + 1);
    setState({
      active: num,
    });
  }

  return (
    <Coverflow
      width={960}
      height={480}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
    >
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg"
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
    </Coverflow>
  );
}
export default CariuselSuper;
