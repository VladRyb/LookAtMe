import React from "react";
import DressCarousel from '../DressCarousel/DressCarousel2';
import {useSelector} from "react-redux"
import UploadForm from '../uploadForm/UploadForm'

import './Dresser.css'

export default function Dresser() {
  const state = useSelector((state) => state)
  const {headImages,bodyImages,pansImages,lapkiImages} = state;

  return (
    <div className="dresser">
      <UploadForm />
      <div>
        <DressCarousel headImages={headImages} title={'Головушка'}/>
      </div>
      <div>
        <DressCarousel headImages={bodyImages} title={'Пузико'}/>
      </div>
      <div>
        <DressCarousel headImages={pansImages} title={'Бедрышки'}/>
      </div>
      <div>
        <DressCarousel headImages={lapkiImages} title={'Лапки'}/>
      </div>
    </div>
  );
}
