import React from "react";

import UserLooksStart from "./startingpage/UserLooksStart";
import AboutComponent from "./startingpage/AboutComponent";
import Video from "./startingpage/Video";
import LookAtMy from "./startingpage/LookAtMy";
import Registration from "./FirebaseAuth/Registration";
import StorageUploader from "./FirebaseAuth/StorageUploader";
import CariuselSuper from "./CaruselSuper/CariuselSuper";
export default function Home(props) {
  return (
    <div id="globalDiv"
    // style={{backgroundImage="man.png"}}
    >
      {/* <Registration /> */}
      {/* <StorageUploader /> */}
      <LookAtMy />
      <AboutComponent />
      <Video />
      {/* <UserLooksStart /> */}
      <h1 id="caruselH1">Samye luchshie looks</h1>
      <CariuselSuper />
    </div>
  );
}
