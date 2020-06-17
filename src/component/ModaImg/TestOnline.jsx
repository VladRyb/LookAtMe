import React from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import ModalImgOnline from './ModalImgOnline';
import TinderCard from 'react-tinder-card';

function Online() {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        preventSwipe={['right', 'left']}
      >
        Hello, World!
      </TinderCard>
    </>
  );
}

export default Online;
