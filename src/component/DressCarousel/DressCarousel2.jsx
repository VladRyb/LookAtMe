import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { dressForNewLook } from "../../redux/actioncreators/actionsSaga";
import ModalImg from "../ModaImg/ModalImg";

export default ({ dressArray, title, property }) => {
  const dispatch = useDispatch();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [chooseItem, setchooseItem] = useState(false);
  const [imageUrl, setimageUrl] = useState("");
  const newLookFromState = useSelector((state) => state.dressForNewLook);

  const dress = dressArray.map((el) => {
    return (
      <img
        key={el.id}
        src={el.imageUrl}
        alt="img"
        className="smallImg"
        onClick={() => {
          setchooseItem(true);
          setimageUrl(el.imageUrl);
          dispatch(
            dressForNewLook(property, { id: el.id, imageUrl: el.imageUrl })
          );
        }}
      />
    );
  });
  const element = newLookFromState[property] ? (
    <img
      src={newLookFromState[property].imageUrl}
      alt="img"
      className="bigImg"
      onClick={() => {
        setchooseItem(false);
        setimageUrl("");
        dispatch(dressForNewLook(property, null));
      }}
    />
  ) : chooseItem ? (
    <img
      src={imageUrl}
      alt="img"
      className="bigImg"
      onClick={() => {
        setchooseItem(false);
        setimageUrl("");
        dispatch(dressForNewLook(property, null));
      }}
    />
  ) : (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="dressCarousel">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={1}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <ModalImg />
        {dress}
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
