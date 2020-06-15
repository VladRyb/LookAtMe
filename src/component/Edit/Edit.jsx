import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel3';
// import UploadForm from '../uploadForm/UploadForm'
import { useSelector } from 'react-redux';
import ModalLookEdit from '../ModaImg/ModalLookEdit';
import { useParams } from 'react-router-dom'
import '../Dresser/Dresser.css';

export default function Dresser() {
  const user = useSelector((state) => state.userTest);
  const { head, body, legs, feet } = user;
  const { id } = useParams();
  const editedLook = user.looks.find(element => element.id === id)

  return (
    <div id='globalDiv'>
      <div className='dresser'>
        {/* <UploadForm /> */}

        <div>
          <DressCarousel
            dressArray={head}
            editedLook = {editedLook.head}
            title={'Головушка'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='head'
          />
        </div>
        <div>
          <DressCarousel
            dressArray={body}
            editedLook = {editedLook.body}
            title={'Пузико'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='body'
          />
        </div>
        <div>
          <DressCarousel
            dressArray={legs}
            editedLook = {editedLook.legs}
            title={'Бедрышки'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='legs'
          />
        </div>
        <div>
          <DressCarousel
            dressArray={feet}
            editedLook = {editedLook.feet}
            title={'Лапки'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property='feet'
          />
        </div>
        <div>
          <ModalLookEdit editedLook = {editedLook}/>
        </div>
      </div>
    </div>
  );
}
