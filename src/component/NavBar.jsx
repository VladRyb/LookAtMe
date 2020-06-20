import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Image } from 'react-bootstrap';
import ModalLogin from './ModalLogin';
import { useDispatch, useSelector } from 'react-redux';
import actionType from '../redux/actions';
import firebase from 'firebase';
import classnames from 'classnames';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from 'reactstrap';

import '../App.css';
import { loadingColWather } from '../redux/actioncreators/actionsSaga';
export default function NavBar(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userUid = localStorage.getItem('uid');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // const [state, setState] = useState(false);
  const [uiConfig, setUiConfig] = useState({
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => {
        handleClose();
        dispatch(loadingColWather());
      },
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

    let result = data.find((item) => item.uid === userUid);

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
      localStorage.setItem('photo', user.photoURL);
    } else {
      dispatch({ type: actionType.login, user });

      localStorage.setItem('session', true);
      localStorage.setItem('user', user.displayName);
      localStorage.setItem('uid', user.uid);
      localStorage.setItem('photo', user.photoURL);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // setState({ isSignedIn: !!user });
      if (user) {
        usersDB(user);
      }
    });
  }, []);

  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });

  return (
    <div className='clobal-nav'>
      <NavbarBrand className='brandLogo'>
        <NavLink to='/' tag={Link} id='sign'>
          <h3>
            <span>Look</span> <span>On</span> <span>Me</span>
          </h3>
        </NavLink>
      </NavbarBrand>

      <Navbar
        id='fixed-top'
        className={classnames('fixed-top', navbarColor)}
        color-on-scroll='300'
        expand='lg'
      >
        <div id='navbar'>
          <Collapse
            className='justify-content-end'
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  data-placement='bottom'
                  href='https://www.facebook.com/'
                  target='_blank'
                  title='Like us on Facebook'
                >
                  <i className='fa fa-facebook-square' />
                  <p className='d-lg-none'>Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement='bottom'
                  href='https://www.instagram.com'
                  target='_blank'
                  title='Follow us on Instagram'
                >
                  <i className='fa fa-instagram' />
                  <p className='d-lg-none'>Instagram</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement='bottom'
                  href='https://github.com/VladRyb/LookAtMe'
                  target='_blank'
                  title='Star on GitHub'
                >
                  <i className='fa fa-github' />
                  <p className='d-lg-none'>GitHub</p>
                </NavLink>
              </NavItem>
              {user.name ? (
                <NavItem id='logoDresser'>
                  <NavLink to='/dresser' tag={Link}>
                    <p id='logoDresserNotLogined'>ВГардероб</p>
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem id='logoDresserNotLogined'>
                  <NavLink to='#' tag={Link}>
                    <ModalLogin
                      setShow={setShow}
                      handleClose={handleClose}
                      show={show}
                      title={'ВГардероб'}
                      uiConfig={uiConfig}
                    />
                  </NavLink>
                </NavItem>
              )}
              {user.name ? (
                <NavItem>
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
                    <NavDropdown.Item>
                      <Link to='/mylooks'>Мои луки</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch({ type: actionType.logout });
                      }}
                    >
                      Выйти
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink to='#' tag={Link}>
                    <i className='nc-icon nc-layout-11' />{' '}
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
