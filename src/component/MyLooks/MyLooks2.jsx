import React from 'react';
import { useSelector } from 'react-redux';
import './myLooks.css';
import OldLooks2 from './OldLooks/OldLooks2';
import { useHistory } from 'react-router-dom';
function MyLooks2(props) {
  const history = useHistory();
  const userName = localStorage.getItem('user');

  if (userName === '') {
    history.push('/');
  }

  const state = useSelector((state) => state);
  if (state.newLook) {
    return (
      <div id='globalDiv'>
        <div className='mylookswrapper'>
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
