import React from 'react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { dressForNewLook } from '../../redux/actioncreators/actionsSaga';
import './camera.css';

const Camera = ({ setOnlinePhoto, setIsCamera }) => {
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setOnlinePhoto(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="camera">
      {imgSrc ? (
        imgSrc && <img src={imgSrc} />
      ) : (
        <Webcam className="webcam" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      )}

      <div className="cameraNav">
        <i
          className="fa fa-times-circle-o red"
          onClick={() => {
            setIsCamera(false);
            setOnlinePhoto('');
          }}
        ></i>

        <i className="fa fa-camera primary" onClick={capture}></i>
      </div>
    </div>
  );
};

export default Camera;
