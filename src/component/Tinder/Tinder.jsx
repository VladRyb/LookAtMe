import React, { useState } from 'react';
import './Tinder.css';
import './TinderIndex.css';
import TinderCard from './TinderPage';
import { useDispatch, useSelector } from 'react-redux';
import { watcherHandleLike } from '../../redux/actioncreators/actionsSaga';

const db = [
  {
    name: 'Richard Hendricks',
    url:
      'https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg',
  },
  {
    name: 'Erlich Bachman',
    url:
      'https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg',
  },
  {
    name: 'Monica Hall',
    url:
      'https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg',
  },
  {
    name: 'Jared Dunn',
    url:
      'https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg',
  },
  {
    name: 'Dinesh Chugtai',
    url:
      'https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg',
  },
];

function Tinder() {
  const dispatch = useDispatch();
  const characters = db;

  const looksShre = useSelector((state) => state.lookisShare);

  const [lastDirection, setLastDirection] = useState();

  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const swiped = (direction, toDelete, id) => {
    if (direction === 'left') {
      dispatch(watcherHandleLike(id, 'dislike'));

      setLeft((prev) => [...prev, toDelete]);
    } else if (direction === 'right') {
      dispatch(watcherHandleLike(id, 'like'));

      setRight((prev) => [...prev, toDelete]);
    }

    setLastDirection(direction);
  };

  const outOfFrame = (name) => {};

  return (
    <div id='tinderCart'>
      <div>
        <link
          href='https://fonts.googleapis.com/css?family=Damion&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
          rel='stylesheet'
        />
        <div className='cardContainer'>
          {looksShre.map((character) => (
            <TinderCard
              className='swipe'
              key={character.id}
              onSwipe={(dir) => {
                swiped(dir, character, character.id);
              }}
              onCardLeftScreen={() => {
                outOfFrame(character.name);
              }}
            >
              <div
                style={{ backgroundImage: 'url(' + character.ImgUrl + ')' }}
                className='card'
              >
                <h3 className='like'></h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {/* {lastDirection ? ( */}
        <div className='infoText' id='like'>
          {' '}
          <span>&#128078;</span>
          <span>&#128077;</span>
        </div>
        {/* ) : ( */}
        {/* <h2 className='infoText' /> */}
        {/* )} */}
      </div>
    </div>
  );
}

export default Tinder;
