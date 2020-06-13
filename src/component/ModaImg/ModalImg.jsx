import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalLogin(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <span variant='primary' onClick={handleShow}>
      <div className="addDiv">
      <i className="fa fa-plus" />
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
              image
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
          <Button className='btn btn-outline-primary' variant='outline-primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
