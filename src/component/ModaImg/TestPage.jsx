import React, { useState } from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import ModalImgOnline from './ModalImgOnline';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actionType from '../../redux/actions';

function TestOn(props) {
  const dispatch = useDispatch();
  let cameraPhoto = null;
  const videoRef = React.createRef();

  const [dataUri, setDataUri] = useState('');

  useEffect(() => {
    cameraPhoto = new CameraPhoto(videoRef.current);
  }, []);

  function startCamera(idealFacingMode, idealResolution) {
    cameraPhoto
      .startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log('camera is started !');
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  }

  function takePhoto() {
    const config = {
      sizeFactor: 1,
    };
    let dataUri = cameraPhoto.getDataUri(config);
    props.setOnlinePhoto(dataUri);
    cameraPhoto
      .stopCamera()
      .then(() => {
        console.log('Camera stoped!');
      })
      .catch((error) => {
        console.log('No camera to stop!:', error);
      });
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            let facingMode = FACING_MODES.ENVIRONMENT;
            let idealResolution = { width: 100, height: 100 };
            startCamera(facingMode, idealResolution);
          }}
        >
          {' '}
          Start{' '}
        </button>

        <button
          onClick={() => {
            takePhoto();
          }}
        >
          {' '}
          Take photo{' '}
        </button>
      </div>
      <video className='videoCam' ref={videoRef} autoPlay='true' />
    </>
  );
}

export default TestOn;
