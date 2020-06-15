import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';

export default function ModalLogin(props) {
  const [show, setShow] = useState(true);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState(props.editedLook.tags);
  const [value, setValue] = useState(props.editedLook.name);

  function addTags(event) {
    if (event.key === 'Enter') {
      const newTag = tags.findIndex((item) => item == tag);
      if (newTag === -1) {
        setTags([...tags, tag]);
      }
    }
  }

  const [fileList, setFileList] = useState([]);
  const [url, setUrl] = useState('');

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = () => {
    if (fileList.length > 0) {
      const uploadTask = storage
        .ref(`images/${fileList[0].name}`)
        .put(fileList[0].originFileObj);
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(fileList[0].name)
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
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Save Look
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>+</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id='container' class='flexChild rowParent'>
            <div id='rowChild94955' class='flexChild'>
              <StorageUploaderModal
                fileList={fileList}
                onPreview={onPreview}
                handleUpload={handleUpload}
                onChange={onChange}
              />
            </div>

            <div id='rowChild77673' class='flexChild'>
              <div className='selectDiv'>
                <input
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                />
              </div>
              <div className='selectDivBottom'>
                <input
                  value={tag}
                  onChange={(event) => setTag(event.target.value)}
                  onKeyPress={addTags}
                  type='text'
                  className='form-control'
                  placeholder='Tags'
                  name='tags'
                  required
                />{' '}
              </div>
              {tags.map((item) => {
                return (
                  <span className='tags badge badge-pill badge-dark'>
                    {item}{' '}
                  </span>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleUpload();
              handleClose();
            }}
            className='btn btn-outline-primary'
            variant='outline-primary'
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
