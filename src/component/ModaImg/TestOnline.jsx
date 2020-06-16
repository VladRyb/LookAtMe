import React from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import ModalImgOnline from './ModalImgOnline';

class Online extends React.Component {
  render() {
    return (
      <>
        <ModalImgOnline />
      </>
    );
  }
}

export default Online;
