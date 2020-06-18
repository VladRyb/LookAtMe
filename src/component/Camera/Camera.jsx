import React from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { dressForNewLook } from "../../redux/actioncreators/actionsSaga";
import "./camera.css";

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
    <>
      {imgSrc ? (
        imgSrc && <img src={imgSrc} />
      ) : (
        <Webcam
          className="webcam"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      )}
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={capture}
      >
        <PhotoCamera />
      </IconButton>

      <i
        className="fa fa-times-circle-o"
        style={{ fontSize: 25 }}
        onClick={() => setIsCamera(false)}
      ></i>

      <i
        className="fa fa-camera"
        style={{ fontSize: 25 }}
        onClick={capture}
      ></i>
      {/* <button onClick={() => setIsCamera(false)}>X</button> */}

    </>
  );
};

export default Camera;

