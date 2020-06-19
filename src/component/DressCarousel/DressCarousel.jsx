import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import ModalImg from "../ModaImg/ModalImg";
import SelectedDressImage from "./SelectedDressImage";
import DressImage from "./DressImage";
import DressCarouselHeader from "./DressCarouselHeader";
import "./DresserCarousel.css";

export default ({ dressArray, title, property, categories }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
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
      <div style={{ padding: `0 ${chevronWidth}px` }} className="dressCarousel">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={10}
          leftChevron={<i class="fa fa-arrow-circle-o-left chevrons" style={{color: 'white'}}></i>}
          rightChevron={<i class="fa fa-arrow-circle-o-right chevrons" style={{color: 'white'}}></i>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <ModalImg categories={categories} property={property} />
          {dress}
        </ItemsCarousel>
      </div>
    </div>
  );

  return <>{element}</>;
};
