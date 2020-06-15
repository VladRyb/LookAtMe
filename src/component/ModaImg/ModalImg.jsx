import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';
import { storage } from '../FirebaseAuth/firebase/index';
import firebase from 'firebase';

export default function ModalLogin(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const [fileList, setFileList] = useState([]);

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
                onChange={onChange}
              />
            </div>

            <div id='rowChild77673' class='flexChild'>
              <div className='selectDiv d-flex justify-content-between'>
                <span>Сезон: </span>
                <select className='select btn btn-secondary btn-sm dropdown-toggle'>
                  <option>Не выбрано</option>
                  <option>Зима</option>
                  <option>Лето</option>
                  <option>Осень</option>
                  <option>Весна</option>
                </select>
              </div>
              <div className='selectDiv d-flex justify-content-between'>
                <span>Тип: </span>
                <select className='select select btn btn-secondary btn-sm dropdown-toggle'>
                  <option>Не выбрано</option>
                  <option>Рубашка</option>
                  <option>Шорты</option>
                  <option>Куртка</option>
                  <option>Кросовки</option>
                </select>
              </div>
              <div className='selectDiv d-flex justify-content-between'>
                <span>Состояние: </span>
                <select className='select select btn btn-secondary btn-sm dropdown-toggle'>
                  <option>Не выбрано</option>
                  <option>Требует ремонта</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='btn btn-outline-primary'
            variant='outline-primary'
            onClick={handleUpload}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
