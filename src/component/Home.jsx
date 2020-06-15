import React from 'react';

import UserLooksStart from './startingpage/UserLooksStart';
import AboutComponent from './startingpage/AboutComponent';
import Video from './startingpage/Video';
import LookAtMy from './startingpage/LookAtMy';
import Registration from './FirebaseAuth/Registration';
import StorageUploader from './FirebaseAuth/StorageUploader';

export default function Home(props) {
  return (
    <div id='globalDiv'>
      {/* <Registration /> */}
      {/* <StorageUploader /> */}
      <LookAtMy />
      <AboutComponent />
      <Video />
      <UserLooksStart />
    </div>
  );
}
