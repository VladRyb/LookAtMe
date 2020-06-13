import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel2';
import { useSelector } from 'react-redux';
import ModalImg from '../ModaImg/ModalImg';

import './Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.userTest);
  const { head, body, legs, feet } = user;

  return (
    <div style={{paddingBottom: 70}}>
      <div>
        <ModalImg />
        <DressCarousel dressArray={head} title={'Головушка'} property='head' />
      </div>
      <div>
        <ModalImg />
        <DressCarousel dressArray={body} title={'Пузико'} />
      </div>
      <div>
        <ModalImg />
        <DressCarousel dressArray={legs} title={'Бедрышки'} />
      </div>
      <div>
        <ModalImg />
        <DressCarousel dressArray={feet} title={'Лапки'} />
      </div>
    </div>
  );
}
