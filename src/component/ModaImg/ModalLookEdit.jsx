import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';
import actionType from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import {
  clearDressForNewLook,
  addTagEdit,
  deleteTagOnEdit,
  onChangeNameEdit,
} from '../../redux/actioncreators/actionsSaga';
import TestOn from './TestPage';
import { useHistory } from 'react-router-dom';

export default function ModalLookEdit(props) {
  const history = useHistory();

  const store = useSelector((state) => state);

  const { tags, name, head, body, legs, feet } = props.editedLook;
  const [show, setShow] = useState(false);
  const [tag, setTag] = useState('');
  const userUid = localStorage.getItem('uid');
  const userName = localStorage.getItem('user');
  const dispatch = useDispatch();

  function addTags(event) {
    if (event.key === 'Enter') {
      const newTag = tags.findIndex((item) => item == tag);
      if (newTag === -1) {
        dispatch(addTagEdit(tag, props.editedLook.id));
        setTag('');
      }
    }
  }

  function deleteOneTag(deletedItem) {
    const filter = tags.filter((el) => el !== deletedItem);
    return filter;
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
        type: actionType.lookisUpd,
        lookis: {
          id: props.editedLook.id,
          creator: userUid + '/' + userName,
          ImgUrl: onlinePhoto,
          name,
          tags,
          head,
          body,
          legs,
          feet,
          share: props.editedLook.shared,
        },
      });
      const gotIt = firebase
        .firestore()
        .collection('lookis')
        .where('id', '==', props.editedLook.id);
      gotIt.get().then((query) => {
        query.forEach((data) => {
          data.ref.update({
            ImgUrl: onlinePhoto,
            name,
            tags,
            head,
            body,
            legs,
            feet,
          });
        });
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
                type: actionType.lookisUpd,
                lookis: {
                  creator: userUid + '/' + userName,
                  ImgUrl: url,
                  name,
                  tags,
                  head,
                  body,
                  legs,
                  feet,
                  id: props.editedLook.id,
                  share: props.editedLook.shared,
                },
              });
              const gotIt = firebase
                .firestore()
                .collection('lookis')
                .where('id', '==', props.editedLook.id);
              gotIt.get().then((query) => {
                query.forEach((data) => {
                  data.ref.update({
                    ImgUrl: url,
                    name,
                    tags,
                    head,
                    body,
                    legs,
                    feet,
                  });
                });
              });
            });
        }
      );
    } else {
      dispatch({
        type: actionType.lookisUpd,
        lookis: {
          creator: userUid + '/' + userName,
          ImgUrl: '',
          name,
          tags,
          head,
          body,
          legs,
          feet,
          id: props.editedLook.id,
          share: props.editedLook.shared,
        },
      });
      const gotIt = firebase
        .firestore()
        .collection('lookis')
        .where('id', '==', props.editedLook.id);
      gotIt.get().then((query) => {
        query.forEach((data) => {
          data.ref.update({
            ImgUrl: '',
            name,
            tags,
            head,
            body,
            legs,
            feet,
          });
        });
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
                    dispatch(
                      onChangeNameEdit(event.target.value, props.editedLook.id)
                    )
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
                    onClick={() =>
                      dispatch(
                        deleteTagOnEdit(deleteOneTag(item), props.editedLook.id)
                      )
                    }
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
