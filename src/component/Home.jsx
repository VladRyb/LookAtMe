import React from 'react';

import AboutComponent from './startingpage/AboutComponent';
import Video from './startingpage/Video';
import LookAtMy from './startingpage/LookAtMy';
import CariuselSuper from './CaruselSuper/CariuselSuper';
export default function Home(props) {
  return (
    <div id='globalDiv'>
      <LookAtMy />
      <AboutComponent />
      <Video />
      <h1 id='caruselH1'>Самые облайканные луки</h1>
      <CariuselSuper />
    </div>
  );
}
