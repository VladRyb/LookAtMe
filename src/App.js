import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import actionType from './redux/actions';
import MyLooks from './component/MyLooks/MyLooks';
import MyLooks2 from './component/MyLooks/MyLooks2';
import ModalImg from './component/ModaImg/ModalImg';

import MyCarousel from './component/DressCarousel/DressCarousel';
import MyCarousel2 from './component/DressCarousel/DressCarousel2';
import Dresser from './component/Dresser/Dresser';
import FooterPage from './component/FooterPage';
import Edit from './component/Edit/Edit';
import firebase from "firebase";

import CropForm from './component/CropForm';

import './App.css';

function App(props) {
  // console.log(state)
  const store = useSelector((state) => state);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const arr = []
  const findU = async () => {
    arr.push(
      await firebase
        .firestore()
        .collection("bodyUrl")
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        }),
        await firebase
        .firestore()
        .collection("headUrl")
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        }),
        await firebase
        .firestore()
        .collection("legsUrl")
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        }),
        await firebase
        .firestore()
        .collection("lapkiUrl")
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((img) => img.data());
        }),
    )
  }
  findU()
  console.log(arr)

  // useEffect(async() => {
  //   const user = await firebase.auth().currentUser.update({
  //     'clothes':['aaa', 'bbbbb']
  //   })
  //   //   .firestore()
  //   //   .collection("users")
  //   //   .get()
  //   //   .then((snapshot) => {
  //   //     return snapshot.docs.map((img) => img.data());
  //   //   });
  //   // let result = data.find(
  //   //   (item) => item.uid === firebase.auth().currentUser.uid
  //   // );
  // }, []);

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
          <CropForm />
        </Route>
        {/* <FooterPage /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
