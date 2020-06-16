import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemsCarousel from 'react-items-carousel';
import ModalImg from '../ModaImg/ModalImg';
import SelectedDressImage from './SelectedDressImage';
import DressImage from './DressImage';
import DressCarouselHeader from './DressCarouselHeader';
import './DresserCarousel.css';

export default ({ dressArray, title, property, type }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [selectedImageUrl, setSelectedmageUrl] = useState('');
  const newLookFromState = useSelector((state) => state.user);

  const dress = dressArray.map((el) => {
    return (
      <DressImage
        el={el}
        property={property}
        setSelectedmageUrl={setSelectedmageUrl}
      />
    );
  });
  dress.unshift(<ModalImg type={type} title={title} />);

  const element = newLookFromState[property] ? (
    <SelectedDressImage
      imageUrl={newLookFromState[property].imageUrl}
      property={property}
      setSelectedmageUrl={setSelectedmageUrl}
    />
  ) : selectedImageUrl ? (
    <SelectedDressImage
      imageUrl={selectedImageUrl}
      property={property}
      setSelectedmageUrl={setSelectedmageUrl}
    />
  ) : (
    <div className='carouselWithYeader'>
      <DressCarouselHeader title={title} itemsArray={type} />
      <div style={{ padding: `0 ${chevronWidth}px` }} className='dressCarousel'>
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
