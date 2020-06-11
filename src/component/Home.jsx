import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ModalKa from './Modal';

export default function Home(props) {
  const session = localStorage.getItem('session');
  const history = useHistory();
  if (session === 'false') {
    history.push('/login');
  }
  return (
    <>
      <div>Home</div>
    </>
  );
}
