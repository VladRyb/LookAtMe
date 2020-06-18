import React from "react";
import Coverflow from "react-coverflow";
import { useState } from "react";

import { useSelector } from "react-redux";

import ModalImg from "../ModaImg/ModalImg";
import SelectedDressImage from "./SelectedDressImage";
import DressImage from "./DressImage";
import DressCarouselHeader from "./DressCarouselHeader";
import "./DresserCarousel.css";

function CariuselSuper({ dressArray, title, property, categories }) {
  const [state, setState] = useState({
    active: 0,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const newLookFromState = useSelector((state) => state.dressForNewLook);

  const dress = dressArray.map((el) => {
    return (
      <DressImage
        el={el}
        property={property}
        setSelectedImage={setSelectedImage}
      />
    );
  });

  function _handleClick() {
    var num = Math.floor(Math.random() * 10 + 1);
    setState({
      active: num,
    });
  }

  const element = newLookFromState[property] ? (
    <SelectedDressImage
      selectedImage={newLookFromState[property]}
      property={property}
      setSelectedImage={setSelectedImage}
    />
  ) : selectedImage ? (
    <SelectedDressImage
      selectedImage={selectedImage}
      property={property}
      setSelectedImage={setSelectedImage}
    />
  ) : (
    <div className="carouselWithYeader">
      <DressCarouselHeader
        title={title}
        categories={categories}
        property={property}
      />

      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      >
        <ModalImg categories={categories} property={property} />
        {dress}
      </Coverflow>
    </div>
  );

  return <>{element}</>;
}
export default CariuselSuper;
