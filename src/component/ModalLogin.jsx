import React from 'react';
import { Modal } from 'react-bootstrap';
import Registration from './FirebaseAuth/Registration';

export default function ModalLogin(props) {
  const handleShow = () => props.setShow(true);

  return (
    <div>
      <span variant='primary' onClick={handleShow}>
        {props.title}
      </span>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <Registration uiConfig={props.uiConfig} />
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'></Modal.Footer>
      </Modal>
    </div>
  );
}
