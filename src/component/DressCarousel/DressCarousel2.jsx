import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default ({ headImages, title }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [chooseItem, setchooseItem] = useState(false);
  const [imageUrl, setimageUrl] = useState("");

  const head = headImages.map((el) => {
    return (
      <img
        src={el}
        alt="img"
        className="smallImg"
        onClick={() => {
          setchooseItem(true);
          setimageUrl(el);
        }}
      />
    );
  });
  const element = chooseItem ? (
    <img src={imageUrl} alt="img" 
    className="bigImg"
    onClick={() => {
      setchooseItem(false);
      setimageUrl("");
    }}/>
  ) : (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="dressCarousel">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={1}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {head}
      </ItemsCarousel>
    </div>
  );

  return (
    <>
      <span>{title}</span>
      <DropdownButton id="dropdown-basic-button" title="КЭПКИ">
        <Dropdown.Item href="#/action-1">КЭПКИ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      {element}
    </>
  );
};
