/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './myLooks.css';
import NewLook from './NewLook/NewLook'
import OldLooks from './OldLooks/OldLooks'


function MyLooks(props) {
  const state = useSelector((state) => state)
  if (state.newLook) {
    return (
      <div className='mylookswrapper'>
        <NewLook />
        <OldLooks />
    </div>);
  } else {
    return (<div><OldLooks /></div>)
}
}

export default MyLooks;
