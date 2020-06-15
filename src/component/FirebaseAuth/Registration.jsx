import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import actionType from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Registration(props) {
  const dispatch = useDispatch();

  // const [state, setState] = useState(false);
  // const [uiConfig, setUiConfig] = useState({
  //   signInFlow: 'popup',
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //   ],
  //   callbacks: {
  //     signInSuccess: () => false,
  //   },
  // });

  // const usersDB = async (user) => {
  //   let data = await firebase
  //     .firestore()
  //     .collection('users')
  //     .get()
  //     .then((snapshot) => {
  //       return snapshot.docs.map((img) => img.data());
  //     });
  //   let result = data.find(
  //     (item) => item.uid === firebase.auth().currentUser.uid
  //   );
  //   if (!result) {
  //     firebase.firestore().collection('users').add({
  //       email: user.email,
  //       displayName: user.displayName,
  //       uid: user.uid,
  //       headDress: [],
  //       bodyDress: [],
  //       legsDress: [],
  //       lapkiDress: [],
  //       looks: [],
  //     });
  //     dispatch({ type: actionType.login, name: user.displayName });

  //     localStorage.setItem('session', true);
  //     localStorage.setItem('user', user.displayName);
  //   } else {
  //     dispatch({ type: actionType.login, name: user.displayName });

  //     localStorage.setItem('session', true);
  //     localStorage.setItem('user', user.displayName);
  //   }
  // };

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setState({ isSignedIn: !!user });
  //     if (!user) {
  //       console.log('failed');
  //     } else {
  //       usersDB(user);
  //     }
  //   });
  // }, []);

  return (
    <>
      {/* <div className='App'>
        {state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img alt='profile' src={firebase.auth().currentUser.photoURL} />
          </span>
        ) : ( */}
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={firebase.auth()}
      />
      {/* )}
      </div> */}
    </>
  );
}
