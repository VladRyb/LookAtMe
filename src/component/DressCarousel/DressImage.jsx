import React, { useState } from 'react';
import {
  dressForNewLook,
  deleteDress,
} from '../../redux/actioncreators/actionsSaga';
import { useDispatch } from 'react-redux';

export default function DressImage({ el, property, setSelectedImage }) {
  const [isHover, setIsHover] = useState(null);
  const dispatch = useDispatch();

  return (
    <div
      className='imageDiv'
      key={el.id}
      onMouseEnter={() => setIsHover(el.id)}
      onMouseLeave={() => setIsHover(null)}
    >
      <img
        src={el.imgUrl}
        alt='img'
        className='smallImg'
        onClick={() => {
          setSelectedImage(el);
          dispatch(dressForNewLook(property, el));
        }}
      />

      {isHover === el.id ? (
        <div
          className='trash'
          onClick={() => {
            dispatch(deleteDress(property, el.id));
          }}
        >
          <i className='fa fa-trash-o '></i>
        </div>
      ) : null}
    </div>
  );
}
