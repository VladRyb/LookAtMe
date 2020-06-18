import React, { useState } from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import ModalImgOnline from './ModalImgOnline';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actionType from '../../redux/actions';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';

function TestOn(props) {
  const dispatch = useDispatch();
  let cameraPhoto = null;
  const videoRef = React.useRef();

  const [dataUri, setDataUri] = useState('');

  useEffect(() => {
    cameraPhoto = new CameraPhoto(videoRef.current);
  }, [videoRef.current]);

  function startCamera(idealFacingMode, idealResolution) {
    cameraPhoto
      .startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log('camera is started !');
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  } ///

  function takePhoto() {
    const config = {
      sizeFactor: 1,
    };
    let dataUri = cameraPhoto.getDataUri(config);
    props.setOnlinePhoto(dataUri);

    // cameraPhoto
    //   .stopCamera()
    //   .then(() => {
    //     console.log('Camera stoped!');
    //   })
    //   .catch((error) => {
    //     console.log('No camera to stop!:', error);
    //   });
    function stopCamera() {
      cameraPhoto
        .stopCamera()
        .then(() => {
          console.log('Camera stoped!');
        })
        .catch((error) => {
          console.log('No camera to stop!:', error);
        });
    }
    stopCamera();
  }

  return (
    <>
      <div>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => {
            let facingMode = FACING_MODES.ENVIRONMENT;
            let idealResolution = { width: 100, height: 100 };
            startCamera(facingMode, idealResolution);
          }}
        >
          Включить камеру
        </Button>
        {/* <button
          onClick={() => {
            let facingMode = FACING_MODES.ENVIRONMENT;
            let idealResolution = { width: 100, height: 100 };
            startCamera(facingMode, idealResolution);
          }}
        > OOOO
        </button> */}
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
          onClick={() => {
            takePhoto();
          }}
        >
          <div ref={videoRef}>
            <PhotoCamera />
          </div>
        </IconButton>
        {/* <button
          onClick={() => {
            takePhoto();
          }}
        >
          {' '}
          Сделать фото{' '}
        </button> */}
      </div>
      <video className='videoCam' ref={videoRef} autoPlay='true' />
    </>
  );
}

export default TestOn;
