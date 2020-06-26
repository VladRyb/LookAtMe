import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import actionType from '../../redux/actions';
import { Form } from 'react-bootstrap';
import Camera from '../Camera/Camera';
import './modalStyle.css';

export default function ModalImg({ property, categories }) {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [typeState, setTypeState] = useState('');
  const [seasonState, setSeasonState] = useState('');
  const [stoyanieState, setStoyanieState] = useState('');
  const [isCamera, setIsCamera] = useState(false);

  const [fileList, setFileList] = useState([]);
  const [onlinePhoto, setOnlinePhoto] = useState('');
  const userUid = localStorage.getItem('uid');
  const userName = localStorage.getItem('user');
  const onChangeProps = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = () => {
    if (onlinePhoto !== '') {
      dispatch({
        type: actionType[property],
        [property]: {
          id: Date.now() + Math.random() * 10,
          imgUrl: onlinePhoto,
          season: seasonState,
          type: typeState,
          stoyanie: stoyanieState || true,
        },
      });
      firebase
        .firestore()
        .collection(property)
        .add({
          id: Date.now() + Math.random() * 10,
          imgUrl: onlinePhoto,
          season: seasonState,
          type: typeState,
          stoyanie: stoyanieState || true,
          creator: userUid + '/' + userName,
        });
    }
    if (fileList.length > 0) {
      const uploadTask = storage.ref(`images/${fileList[0].name}`).put(fileList[0].originFileObj);
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
                type: actionType[property],
                [property]: {
                  id: Date.now() + Math.random() * 10,
                  imgUrl: url,
                  season: seasonState,
                  type: typeState,
                  stoyanie: stoyanieState || true,
                },
              });
              firebase
                .firestore()
                .collection(property)
                .add({
                  id: Date.now() + Math.random() * 10,
                  imgUrl: url,
                  season: seasonState,
                  type: typeState,
                  stoyanie: stoyanieState || true,
                  creator: userUid + '/' + userName,
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
      <span variant="primary" onClick={handleShow}>
        <div className="addDiv">
          <i className="fa fa-plus" />
        </div>
      </span>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить одежду</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="container" class="flexChild rowParent">
            <div id="rowChild94955" class="flexChild cam">
              <div className="modalCamera">
                {!isCamera ? (
                  <>
                    <StorageUploaderModal
                      fileList={fileList}
                      onPreview={onPreview}
                      handleUpload={handleUpload}
                      onChange={onChangeProps}
                    />

                    <Button
                      onClick={() => setIsCamera((isCamera) => !isCamera)}
                      className="btn btn-outline-primary"
                      variant="outline-primary"
                      type="submit"
                    >
                      Сделать фото
                    </Button>
                  </>
                ) : (
                  <Camera setOnlinePhoto={setOnlinePhoto} setIsCamera={setIsCamera} />
                )}
              </div>
            </div>
            <div class="formsdiv">
              <Form class="formFilters">
                <Form.Label>Сезон:</Form.Label>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    custom
                    onChange={(event) => setSeasonState(event.target.value)}
                  >
                    <option>Не выбрано</option>
                    <option value="winter">Зима</option>
                    <option value="summer">Лето</option>
                    <option value="autumn">Осень</option>
                    <option value="spring">Весна</option>
                  </Form.Control>
                </Form.Group>
              </Form>
              <Form>
                <Form.Label>Категории:</Form.Label>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    custom
                    onChange={(event) => setTypeState(event.target.value)}
                  >
                    <option>Не выбрано</option>
                    {categories.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
              </Form>
              <Form>
                <Form.Label>Состояние:</Form.Label>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    custom
                    onChange={(event) => setStoyanieState(event.target.value)}
                  >
                    <option>В хорошем состоянии</option>
                    <option value="false">Требует ремонта</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-outline-primary"
            variant="outline-primary"
            onClick={() => {
              handleUpload();
              handleClose();
            }}
            type="submit"
          >
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
