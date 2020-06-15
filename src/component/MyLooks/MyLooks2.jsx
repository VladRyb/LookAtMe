import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './myLooks.css';
import OldLooks2 from './OldLooks/OldLooks2';

function MyLooks2(props) {
  const state = useSelector((state) => state);
  if (state.newLook) {
    return (
      <div id='globalDiv'>
        <div className='mylookswrapper'>
          {/* <NewLook /> */}
          <OldLooks2 />
        </div>
      </div>
    );
  } else {
    return (
      <div id='globalDiv'>
        <div className='mylookswrapper'>
          <OldLooks2 />
        </div>
      </div>
    );
  }
}

export default MyLooks2;
