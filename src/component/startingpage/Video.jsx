import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function Video() {
  return (
    <>
      <h2>Это видео покажет как пользоваться этим приложением</h2>
      <div className='video'>
        <img
          alt='video'
          src='https://avatars.mds.yandex.net/get-pdb/1906262/deeccc85-ae8f-4c14-8842-c2a52d19c6e0/orig'
          style={{ width: '25rem', height: '25rem' }}
        />
      </div>
    </>
  );
}
