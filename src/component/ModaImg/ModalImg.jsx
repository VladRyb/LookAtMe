import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionType from '../redux/actions';

export default function ModalLogin(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <span variant='primary' onClick={handleShow}>
        Login
      </span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button className='btn btn-outline-primary' variant='outline-primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
