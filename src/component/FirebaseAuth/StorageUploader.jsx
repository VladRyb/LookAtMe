import React, { useState } from 'react';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';

function StorageUploader() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            firebase.firestore().collection('images').add({
              url: url,
              user: firebase.auth().currentUser.uid,
            });
          });
      }
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <div className='example-1'>
        <div className='form-group'>
          {!url ? (
            <>
              {!image ? (
                <label className='label'>
                  <i className='material-icons'>attach_file</i>
                  <input type='file' onChange={handleChange} />
                </label>
              ) : (
                <>
                  <label className='label'>
                    <div>&#10004;</div>
                  </label>
                  <button className='btn btn-dark' onClick={handleUpload}>
                    Upload
                  </button>
                </>
              )}
            </>
          ) : (
            <label className='label'>
              <img className='uploadImg' src={url} alt='' />
            </label>
          )}
        </div>
      </div>

      {/* <div>
        <input type='file' className='btn btn-dark' onChange={handleChange} />
        <button className='btn btn-dark' onClick={handleUpload}>
          Upload
        </button>
        <br />
        <img
          id='myimg'
          src={url || 'http://via.placeholder.com/100'}
          alt='firebaseImg'
          style={{ width: '100px', height: '100px' }}
        />
      </div> */}
    </>
  );
}

export default StorageUploader;
