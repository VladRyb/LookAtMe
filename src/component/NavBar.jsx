import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Image } from 'react-bootstrap';
import ModalLogin from './ModalLogin';
import ModalSingUp from './ModalSingUp';
import { useDispatch, useSelector } from 'react-redux';
import actionType from '../redux/actions';
import firebase from 'firebase';

export default function NavBar(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [state, setState] = useState(false);
  const [uiConfig, setUiConfig] = useState({
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  });

  const usersDB = async (user) => {
    let data = await firebase
      .firestore()
      .collection('users')
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((img) => img.data());
      });
    let result = data.find(
      (item) => item.uid === firebase.auth().currentUser.uid
    );
    if (!result) {
      firebase.firestore().collection('users').add({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        providerData: user.providerData[0].providerId,
      });
      dispatch({ type: actionType.login, user });

      localStorage.setItem('session', true);
      localStorage.setItem('user', user.displayName);
      localStorage.setItem('uid', user.uid);
    } else {
      dispatch({ type: actionType.login, user });

      localStorage.setItem('session', true);
      localStorage.setItem('user', user.displayName);
      localStorage.setItem('uid', user.uid);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setState({ isSignedIn: !!user });
      if (user) {
        usersDB(user);
      }
    });
  }, []);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/car'>
              Начать пользоваться <span className='sr-only'>(current)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='d-flex justify-content-end'>
        <ul className='navbar-nav mr-auto'>
          {user.name ? (
            <NavDropdown
              title={
                <Image
                  id='iconProfile'
                  src={
                    user.photo ||
                    'https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png'
                  }
                  roundedCircle
                />
              }
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item href='/mylooks'>Dresser</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  dispatch({ type: actionType.logout });
                }}
              >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <li className='nav-item '>
                <Link className='nav-link' to='#'>
                  <span>
                    <ModalLogin uiConfig={uiConfig} />
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
