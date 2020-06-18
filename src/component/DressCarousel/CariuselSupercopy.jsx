import React, { useState } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

import { useSelector } from "react-redux";

import ModalImg from "../ModaImg/ModalImg";
import SelectedDressImage from "./SelectedDressImage";
import DressImage from "./DressImage";
import DressCarouselHeader from "./DressCarouselHeader";
import "./DresserCarousel.css";

var fn = function () {
  /* do you want */
};
export default function Carousel({ dressArray, title, property, categories }) {
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
  dress.unshift(<ModalImg categories={categories} property={property} />);

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
    <div className="carouselWithHeader">
      <DressCarouselHeader
        title={title}
        categories={categories}
        property={property}
      />
      <StyleRoot>
        <Coverflow
          width={800}
          height={300}
          className="carousel"
          enableHeading={false}
          enableScroll={false}
          active={2}
          otherFigureScale={0.5}
          displayQuantityOfSide={2}
          // displayQuantityOfSide={2}
          navigation
          style={{ width: "600px" }}
          // infiniteScroll
          // enableHeading
          // media={{
          //   "@media (max-width: 900px)": {
          //     width: "600px",
          //     height: "300px",
          //   },
          //   "@media (min-width: 900px)": {
          //     width: "800px",
          //     height: "200px",
          //   },
          // }}
        >
          {dress}

          {/* <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
      <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
      <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/> */}
        </Coverflow>
      </StyleRoot>
    </div>
  );

  return <>{element}</>;
}
