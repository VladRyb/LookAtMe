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

import CropForm from './component/CropForm';

import './App.css';
import Online from './component/ModaImg/TestOnline';

function App(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const userUid = localStorage.getItem('uid');
  const userName = localStorage.getItem('user');

  useEffect(() => {
    const findU = async () => {
      const body = await firebase
        .firestore()
        .collection('body')
        .where('creator', '==', userUid + '/' + userName)
        .get()
        .then((snapshot) => {
          // console.log('snapshotbody',snapshot)
          return snapshot.docs.map((img) => img.data());
        });

      console.log('body>>>>>>>>>>>>>>', body);

      const head = await firebase
        .firestore()
        .collection('head')
        .where('creator', '==', userUid + '/' + userName)
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        });
      // console.log('head>>>>>>>>>>>>>>', head)

      const legs = await firebase
        .firestore()
        .collection('legs')
        .where('creator', '==', userUid + '/' + userName)
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        });
      // console.log('legs>>>>>>>>>>>>>>', legs)

      const feet = await firebase
        .firestore()
        .collection('feet')
        .where('creator', '==', userUid + '/' + userName)
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        });
      console.log('feet>>>>>>>>>>>>>>', feet);

      const lookis = await firebase
        .firestore()
        .collection('lookis')
        .where('creator', '==', userUid + '/' + userName)
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        });
      console.log('lookis>>>>>>>>>>>>>>', lookis);
      dispatch({
        type: actionType.arrImg,
        body: body,
        head: head,
        legs: legs,
        feet: feet,
        lookis: lookis,
      });
    };
    findU();
    console.log('tttttttttttt');
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
        <Route exact path='/car'>
          <Dresser />
          {/* <MyCarousel /> */}
        </Route>
        <Route exact path='/edit/:id'>
          <Edit />
        </Route>
        <Route exact path='/test'>
          {/* <CropForm /> */}
          <WebcamCapture />
        </Route>
        <Route exact path='/teston'>
          <Online />
        </Route>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </>
  );
}
export default App;
