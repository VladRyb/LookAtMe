import React from 'react';
import './styles.css';
import { Card } from 'react-bootstrap';
import Tinder from '../Tinder/Tinder';

export default function Video() {
  return (
    <>
      <div className='video'>
        <h1>Tinder</h1>
        <Tinder />
      </div>
    </>
  );
}
