import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Registration(props) {
  return (
    <>
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  );
}
