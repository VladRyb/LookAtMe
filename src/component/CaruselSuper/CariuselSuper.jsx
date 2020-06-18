import React from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { StyleRoot } from 'radium';

function CariuselSuper() {
  const looksArray = useSelector((state) => state.lookisShare);
  const [activeElem, setActiveElem] = useState(0);

  while (looksArray[0] === undefined) {
    return 'loading';
  }
  const carousel = looksArray.map((el) => {
    return (
      <img
        src={el.ImgUrl}
        alt={`👍${el.like ? el.like : '0'}
        👎${el.dislike ? el.dislike : '0'}`}
      />
    );
  });

  setTimeout(() => {
    if (activeElem >= looksArray.length) {
      setActiveElem(0);
    } else {
      setActiveElem((activeElem) => ++activeElem);
    }
    // console.log(activeElem);
  }, 2000);
  return (
    // <StyleRoot>
    <div id='cour'>
      <Coverflow
        clickable={false}
        enableScroll={false}
        active={activeElem}
        currentFigureScale={1.7}
        height={350}
        width={300}
        // navigation
        infiniteScroll={true}
        // enableHeading
        displayQuantityOfSide={2}
        enableHeading
      >
        {carousel}
      </Coverflow>
    </div>
    // </StyleRoot>
  );
}
export default CariuselSuper;
