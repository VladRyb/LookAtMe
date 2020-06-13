import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel3';
import { useSelector } from 'react-redux';
import ModalImg from '../ModaImg/ModalImg';
import { useParams } from 'react-router-dom'

// import './Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.userTest);
  const { id } = useParams();
  const { head, body, legs, feet } = user;
  const editedLook = user.looks.find(element => element.id === id)
  return (
    <div className="dresser">
      <div>
        <DressCarousel dressArray={head} editedLook = {editedLook.head} title={'Головушка'} property='head' />
      </div>
      <div>
        <DressCarousel dressArray={body} editedLook = {editedLook.body} title={'Пузико'} />
      </div>
      <div>
        <DressCarousel dressArray={legs} editedLook = {editedLook.legs} title={'Бедрышки'} />
      </div>
      <div>
        <DressCarousel dressArray={feet} editedLook = {editedLook.feet} title={'Лапки'} />
      </div>
    </div>
  );
}
