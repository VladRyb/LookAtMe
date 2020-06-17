import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsCarousel from 'react-items-carousel';
import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { updateLookWatcher } from '../../redux/actioncreators/actionsSaga';
import SelectedDressImage from './SelectedDressImage';
import DressImage from './DressImage';
import DressCarouselHeader from './DressCarouselHeader';
import ModalImg from '../ModaImg/ModalImg';

export default ({ dressArray, title, property, type, editedLook }) => {
  const dispatch = useDispatch();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  if (editedLook === null) {
    editedLook = {
      imgUrl: null,
    };
  }
  const [selectedImage, setSelectedImage] = useState(`${editedLook.imgUrl}`);
  const newLookFromState = useSelector((state) => state.dressForNewLook);

  const dress = dressArray.map((el) => {
    return <DressImage el={el} property={property} setSelectedImage={setSelectedImage} />;
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
    <div className="carouselWithYeader">
      <DressCarouselHeader title={title} itemsArray={type} />
      <div style={{ padding: `0 ${chevronWidth}px` }} className="dressCarousel">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={10}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {dress}
        </ItemsCarousel>
      </div>
    </div>
  );

  return <>{element}</>;
};
