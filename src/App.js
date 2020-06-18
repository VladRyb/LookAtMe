import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import actionType from './redux/actions';
// import MyLooks from "./component/MyLooks/MyLook";
import MyLooks2 from './component/MyLooks/MyLooks2';
import ModalImg from './component/ModaImg/ModalImg';

import Dresser from './component/Dresser/Dresser';
import FooterPage from './component/FooterPage';
import Edit from './component/Edit/Edit';
import firebase from 'firebase';

import WebcamCapture from './component/Camera/Camera';

import CariuselSuper from './component/CaruselSuper/CariuselSuper';

import CropForm from './component/CropForm';

import './App.css';

// import Online from './component/Tinder/TestOnline';
import { loadingColWather } from "./redux/actioncreators/actionsSaga";

function App(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const userUid = localStorage.getItem('uid');
  const userName = localStorage.getItem('user');

  useEffect(() => {
    dispatch(loadingColWather());
  }, [userUid]);

  return (
    <>
      <BrowserRouter>
        <NavBar user={store.user} />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/mylooks'>
          <MyLooks2 />
        </Route>

        {/* <Route exact path='/car'> */}
        <Route exact path="/dresser">

          <Dresser />
          {/* <MyCarousel /> */}
        </Route>
        <Route exact path='/edit/:id'>
          <Edit />
        </Route>
        <Route exact path="/test">
          {/* <CropForm /> */}
          <WebcamCapture />

        </Route>

        <Route exact path="/teston">
          {/* <CariuselSuper /> */}
          {/* <Online /> */}
        </Route>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </>
  );
}
export default App;
