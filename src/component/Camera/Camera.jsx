import React from 'react';
import { useDispatch } from 'react-redux';
import Webcam from 'react-webcam';
import { dressForNewLook } from '../../redux/actioncreators/actionsSaga';
import './camera.css';

const WebcamCapture = () => {
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    dispatch(dressForNewLook('photo', imageSrc));
  }, [webcamRef, setImgSrc]);

  return (
    <>
      {imgSrc ? (
        imgSrc && <img src={imgSrc} />
      ) : (
        <Webcam
          className='webcam'
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
        />
      )}
      <button onClick={capture}>Capture photo</button>
      <button onClick={() => console.log('imgSrc')}>log</button>
    </>
  );
};

export default WebcamCapture;

// ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
