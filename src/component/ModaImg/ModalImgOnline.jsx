import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';
import useSelection from 'antd/lib/table/hooks/useSelection';
import { useSelector, useDispatch } from 'react-redux';
import actionType from '../../redux/actions';
import TestOn from './TestPage';

export default function ModalImgOnline(props) {
  //////////

  //////////////

  const [show, setShow] = useState(false);
  const store = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [stateUrl, setStateUrl] = useState({
    img: {
      ImgUrl: null,
      ImgId: new Date() + Math.random() * 10,
    },
    season: '',
    type: '',
    stoyanie: true,
  });
  const [typeState, setTypeState] = useState('');
  const [seasonState, setSeasonState] = useState('');
  const [stoyanieState, setStoyanieState] = useState('');

  const [fileList, setFileList] = useState([]);
  const [onlinePhoto, setOnlinePhoto] = useState('');

  const onChangeProps = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = () => {
    if (onlinePhoto !== '') {
      dispatch({
        type: actionType[props.title],
        [props.title]: {
          img: {
            ImgUrl: onlinePhoto,
            ImgId: Date.now() + Math.random() * 10,
          },
          season: seasonState,
          type: typeState,
          stoyanie: stoyanieState || true,
        },
      });
    }
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
              dispatch({
                type: actionType[props.title],
                [props.title]: {
                  img: {
                    ImgUrl: url,
                    ImgId: Date.now() + Math.random() * 10,
                  },
                  season: seasonState,
                  type: typeState,
                  stoyanie: stoyanieState || true,
                },
              });
              firebase
                .firestore()
                .collection(props.title)
                .add({
                  img: {
                    ImgUrl: url,
                    ImgId: Date.now() + Math.random() * 10,
                  },
                  season: seasonState,
                  type: typeState,
                  stoyanie: stoyanieState || true,
                  creator:
                    firebase.auth().currentUser.uid +
                    '/' +
                    firebase.auth().currentUser.displayName,
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

  return (
    <div>
      <span variant='primary' onClick={handleShow}>
        <div className='addDiv'>
          <i className='fa fa-plus' />
        </div>
      </span>
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
                onChange={onChangeProps}
              />
              <TestOn setOnlinePhoto={setOnlinePhoto} />
              <img src={onlinePhoto} alt='' />
            </div>

            <div id='rowChild77673' class='flexChild'>
              <div className='selectDiv d-flex justify-content-between'>
                <span>Сезон: </span>
                <select
                  className='select btn btn-secondary btn-sm dropdown-toggle'
                  onChange={(event) => setSeasonState(event.target.value)}
                >
                  <option>Не выбрано</option>
                  <option value='winter'>Зима</option>
                  <option value='summer'>Лето</option>
                  <option value='autumn'>Осень</option>
                  <option value='spring'>Весна</option>
                </select>
              </div>
              {/* <div className='selectDiv d-flex justify-content-between'>
                <span>Тип: </span>
                <select
                  className='select select btn btn-secondary btn-sm dropdown-toggle'
                  onChange={(event) => setTypeState(event.target.value)}
                >
                  {props.type.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div> */}
              <div className='selectDiv d-flex justify-content-between'>
                <span>Состояние: </span>
                <select
                  className='select select btn btn-secondary btn-sm dropdown-toggle'
                  onChange={(event) => setStoyanieState(event.target.value)}
                >
                  <option>Не выбрано</option>
                  <option value='false'>Требует ремонта</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='btn btn-outline-primary'
            variant='outline-primary'
            onClick={() => {
              handleUpload();
              handleClose();
            }}
            type='submit'
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
