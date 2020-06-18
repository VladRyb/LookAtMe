import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import actionType from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Registration(props) {
  const dispatch = useDispatch();

  return (
    <>
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  );
}
