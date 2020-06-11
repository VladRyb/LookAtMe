import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionType from '../redux/actions';

export default function ModalSingUp(props) {
  const [messe, setMess] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const dispatch = useDispatch();

  async function singUp(event) {
    event.preventDefault();

    const response = await fetch('/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: pass,
      }),
    });
    const result = await response.json();
    if (result.status === 200) {
      dispatch({ type: actionType.login, session: result.session });

      const user = result.session.name;
      localStorage.setItem('session', true);
      localStorage.setItem('user', user);

      history.push('/');
    } else {
      setMess(`${result.error} , Уже Занян`);
    }
  }

  return (
    <div>
      <span variant='primary' onClick={handleShow}>
        Sing Up
      </span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>SingUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-group'>
            <label>Name</label>
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              type='text'
              className='form-control '
              name='name'
              placeholder='Name'
              required
            />
          </div>
          <div className='form-group'>
            <label>Email address</label>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              placeholder='Enter email'
              name='email'
              required
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              value={pass}
              onChange={(event) => {
                setPass(event.target.value);
              }}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              name='password'
              required
            />
            <div>{messe} </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='btn btn-outline-primary'
            variant='outline-primary'
            onClick={singUp}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
