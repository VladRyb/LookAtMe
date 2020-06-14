import React, { useState } from "react";
import { storage } from "../FirebaseAuth/firebase/index";
import firebase from "firebase";

function StorageUploader() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            firebase.firestore().collection('images').add({
              url:url,
              user:firebase.auth().currentUser.uid
            })
          });
      }
    );
  };

  return (
    <>
      <div>
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        <img 
        id='myimg'
          src={url || "http://via.placeholder.com/300"}
          alt="firebaseImg"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </>
  );
}

export default StorageUploader;
