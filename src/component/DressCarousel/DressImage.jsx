import React, { useState } from 'react';
import {
  dressForNewLook,
  deleteDress,
} from '../../redux/actioncreators/actionsSaga';
import { useDispatch } from 'react-redux';

export default function DressImage({ el, property, setSelectedmageUrl }) {
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
        src={el.img.ImgUrl}
        alt='img'
        className='smallImg'
        onClick={() => {
          setSelectedmageUrl(el.imageUrl);
          dispatch(
            dressForNewLook(property, { id: el.id, imageUrl: el.imageUrl })
          );
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
