import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';
import actionType from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdbreact';

import {
  clearDressForNewLook,
  addTag,
  deleteTag,
  onChangeName,
} from '../../redux/actioncreators/actionsSaga';
import TestOn from './TestPage';
import { useHistory } from 'react-router-dom';

export default function ModalLook(props) {
  const history = useHistory();

  const store = useSelector((state) => state);

  const { tags, name, head, body, legs, feet } = store.dressForNewLook;

  const [show, setShow] = useState(false);
  const [tag, setTag] = useState('');
  const userUid = localStorage.getItem('uid');
  const userName = localStorage.getItem('user');
  const dispatch = useDispatch();

  function addTags(event) {
    if (event.key === 'Enter') {
      const newTag = tags.findIndex((item) => item == tag);
      if (newTag === -1) {
        dispatch(addTag(tag));
        setTag('');
      }
    }
  }

  function deleteOneTag(deletedItem) {
    return tags.filter((el) => el !== deletedItem);
  }

  const [fileList, setFileList] = useState([]);
  const [onlinePhoto, setOnlinePhoto] = useState('');

  // const [url, setUrl] = useState('');

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = () => {
    if (onlinePhoto !== '') {
      dispatch({
        type: actionType.lookis,
        lookis: {
          id: Date.now() + Math.random() * 10,
          ImgUrl: onlinePhoto,
          name,
          tags,
          head,
          body,
          legs,
          feet,
          share: false,
        },
      });
      firebase
        .firestore()
        .collection('lookis')
        .add({
          id: Date.now() + Math.random() * 10,
          ImgUrl: onlinePhoto,
          name,
          tags,
          head,
          body,
          legs,
          feet,
          share: false,
          creator: userUid + '/' + userName,

          // creator:
          //   firebase.auth().currentUser.uid +
          //   '/' +
          //   firebase.auth().currentUser.displayName,
        });
    } else if (fileList.length > 0) {
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
              dispatch({
                type: actionType.lookis,
                lookis: {
                  id: Date.now() + Math.random() * 10,
                  ImgUrl: url,
                  name,
                  tags,
                  head,
                  body,
                  legs,
                  feet,
                  share: false,
                },
              });
              firebase
                .firestore()
                .collection('lookis')
                .add({
                  id: Date.now() + Math.random() * 10,
                  ImgUrl: url,
                  name,
                  tags,
                  head,
                  body,
                  legs,
                  feet,
                  share: false,
                  creator: userUid + '/' + userName,

                  // firebase.auth().currentUser.uid +
                  // '/' +
                  // firebase.auth().currentUser.displayName,
                });
            });
        }
      );
    } else {
      dispatch({
        type: actionType.lookis,
        lookis: {
          id: Date.now() + Math.random() * 10,
          ImgUrl: '',
          name,
          tags,
          head,
          body,
          legs,
          feet,
          share: false,
        },
      });
      firebase
        .firestore()
        .collection('lookis')
        .add({
          id: Date.now() + Math.random() * 10,
          ImgUrl: '',
          name,
          tags,
          head,
          body,
          legs,
          feet,
          share: false,
          creator: userUid + '/' + userName,

          // creator:
          //   firebase.auth().currentUser.uid +
          //   '/' +
          //   firebase.auth().currentUser.displayName,
        });
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
      {/* <Button variant='primary' onClick={handleShow}>
        Save Look
      </Button> */}
      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      > */}
      <MDBBtn color='primary' onClick={handleShow}>
        <MDBIcon icon='user-plus' className='mr-1' /> Сохранить лук
      </MDBBtn>
      {/* <Button variant="outline-primary" onClick={handleShow}>
        Save Look
      </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Сохранить лук</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id='container' class='flexChild rowParent'>
            <div id='rowChild94955' class='flexChild'>
              {onlinePhoto === '' ? (
                <StorageUploaderModal
                  fileList={fileList}
                  onPreview={onPreview}
                  handleUpload={handleUpload}
                  onChange={onChange}
                />
              ) : (
                <>
                  <img src={onlinePhoto} alt='' />
                </>
              )}
              <TestOn setOnlinePhoto={setOnlinePhoto} />
            </div>
            <div id='rowChild77673' class='flexChild'>
              <div className='selectDiv'>
                <input
                  value={name}
                  onChange={(event) =>
                    dispatch(onChangeName(event.target.value))
                  }
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
                  <span
                    className='tags badge badge-pill badge-dark'
                    onClick={() => dispatch(deleteTag(deleteOneTag(item)))}
                  >
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
              dispatch(clearDressForNewLook());
              history.push('/mylooks');
            }}
            className='btn btn-outline-primary'
            variant='outline-primary'
            type='submit'
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
