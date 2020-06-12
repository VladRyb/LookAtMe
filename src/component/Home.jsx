import React from 'react';

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
