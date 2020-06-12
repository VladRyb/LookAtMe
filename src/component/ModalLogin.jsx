import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionType from '../redux/actions';

export default function ModalLogin(props) {
  const [messe, setMess] = useState();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const dispatch = useDispatch();

  async function loginSubmit(event) {
    event.preventDefault();

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
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
      setMess('Неверный Логин или Пароль');
    }
  }

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
        <Modal.Body>
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
        <Modal.Footer className='d-flex justify-content-between'>
          <Button
            id='googleButton'
            variant='primary'
            onClick={() => {
              window.location = 'http://localhost:4000/auth/google';
            }}
          >
            <img className='googleIcon' src='../google.png' alt='' />
            Sing in with Google
          </Button>
          <Button
            className='btn btn-outline-primary'
            variant='outline-primary'
            onClick={loginSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
