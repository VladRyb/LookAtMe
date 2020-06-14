import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel2';
// import UploadForm from '../uploadForm/UploadForm'
import { useSelector } from 'react-redux';
import ModalLook from '../ModaImg/ModalLook';

import './Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.userTest);
  const { head, body, legs, feet } = user;

  return (
    <div className="dresser">
      {/* <UploadForm /> */}

      <div>
        <DressCarousel dressArray={head} title={'Головушка'} property='head' />
      </div>
      <div>
        <DressCarousel dressArray={body} title={'Пузико'} property='body' />
      </div>
      <div>
        <DressCarousel dressArray={legs} title={'Бедрышки'} property='legs' />
      </div>
      <div>
        <DressCarousel dressArray={feet} title={'Лапки'} property='feet' />
      </div>
      <div>
        <ModalLook />
      </div>
    </div>
  );
}
