import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel2';
import { useSelector } from 'react-redux';
import ModalImg from '../ModaImg/ModalImg';
import { useParams } from 'react-router-dom'

// import './Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.userTest);
  let test = useParams();
  const { head, body, legs, feet } = user;
  console.log(test)
  return (
    <div className="dresser">
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
    </div>
  );
}
