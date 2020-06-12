import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import UserLooksStart from './startingpage/UserLooksStart';
import AboutComponent from './startingpage/AboutComponent';
import Video from './startingpage/Video';
import LookAtMy from './startingpage/LookAtMy';

export default function Home(props) {
  return (
    <>
      <LookAtMy />
      <AboutComponent />
      <Video />
      <UserLooksStart />
    </>
  );
}
