import React, { useState } from 'react';
import './Tinder.css';
import './TinderIndex.css';
import TinderCard from './TinderPage';

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

function Online() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const swiped = (direction, toDelete) => {
    if (direction === 'left') {
      setLeft((prev) => [...prev, toDelete]);
    } else if (direction === 'right') {
      setRight((prev) => [...prev, toDelete]);
    }

    setLastDirection(direction);
  };
  console.log(left);
  console.log(right);

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div id='globalDiv'>
      <div>
        <link
          href='https://fonts.googleapis.com/css?family=Damion&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
          rel='stylesheet'
        />
        <h1>React Tinder Card</h1>
        <div className='cardContainer'>
          {characters.map((character) => (
            <TinderCard
              className='swipe'
              key={character.name}
              onSwipe={(dir) => {
                swiped(dir, character);
              }}
              onCardLeftScreen={() => {
                outOfFrame(character.name);
              }}
            >
              <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className='card'
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className='infoText'>You swiped {lastDirection}</h2>
        ) : (
          <h2 className='infoText' />
        )}
      </div>
    </div>
  );
}

export default Online;
