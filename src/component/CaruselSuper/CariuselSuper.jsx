import React from "react";
import Coverflow from "react-coverflow";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { StyleRoot } from "radium";

function CariuselSuper() {
  const [state, setState] = useState({
    active: 0,
  });

  const looksArray = useSelector((state) => state.lookisShare);

  function _handleClick() {
    var num = Math.floor(Math.random() * 10 + 1);
    setState({
      active: num,
    });
  }

  return (
    // <StyleRoot>
    <Coverflow
      width={100}
      height={300}
      // navigation
      // infiniteScroll
      // enableHeading
      displayQuantityOfSide={1.8}
      navigation={false}
      enableHeading={false}
    >
      {}
    </Coverflow>
    // </StyleRoot>
  );
}
export default CariuselSuper;
