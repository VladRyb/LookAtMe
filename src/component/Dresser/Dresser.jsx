import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel2';
import { useSelector } from 'react-redux';
import ModalLook from '../ModaImg/ModalLook';

import './Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.userTest);
  const { head, body, legs, feet } = user;

  return (
    <div className='dresser'>
      <div>
        <DressCarousel dressArray={head} title={'Головушка'} property='head' />
      </div>
      <div>
        <DressCarousel dressArray={body} title={'Пузико'} />
      </div>
      <div>
        <DressCarousel dressArray={legs} title={'Бедрышки'} />
      </div>
      <div>
        <DressCarousel dressArray={feet} title={'Лапки'} />
      </div>
      <div>
        <ModalLook />
      </div>
    </div>
  );
}
