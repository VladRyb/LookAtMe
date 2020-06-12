import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel2';
import { useSelector } from 'react-redux';
import ModalImg from '../ModaImg/ModalImg';

import './Dresser.css';

export default function Dresser() {
  const state = useSelector((state) => state);
  const { headImages, bodyImages, pansImages, lapkiImages } = state;

  return (
    <>
      <div>
        <ModalImg />
        <DressCarousel headImages={headImages} title={'Головушка'} />
      </div>
      <div>
        <ModalImg />
        <DressCarousel headImages={bodyImages} title={'Пузико'} />
      </div>
      <div>
        <ModalImg />
        <DressCarousel headImages={pansImages} title={'Бедрышки'} />
      </div>
      <div>
        <ModalImg />
        <DressCarousel headImages={lapkiImages} title={'Лапки'} />
      </div>
    </>
  );
}
