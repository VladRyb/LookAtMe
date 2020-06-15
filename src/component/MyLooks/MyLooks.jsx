/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './myLooks.css';
import NewLook from './NewLook/NewLook';
import OldLooks from './OldLooks/OldLooks';

function MyLooks(props) {
  const state = useSelector((state) => state);
  if (state.newLook) {
    return (
      <div id='globalDiv'>
        <div className='mylookswrapper'>
          {/* <NewLook /> */}
          <OldLooks />
        </div>
      </div>
    );
  } else {
    return (
      <div id='globalDiv'>
        <div className='mylookswrapper'>
          <OldLooks />
        </div>
      </div>
    );
  }
}

export default MyLooks;
