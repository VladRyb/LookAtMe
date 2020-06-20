import React from 'react';
import './Tinder.css';
import './TinderIndex.css';
import TinderCard from './TinderPage';
import { useDispatch, useSelector } from 'react-redux';
import { watcherHandleLike } from '../../redux/actioncreators/actionsSaga';

function Tinder() {
  const dispatch = useDispatch();

  const looksShre = useSelector((state) => state.lookisShare);

  const swiped = (direction, toDelete, id) => {
    if (direction === 'left') {
      dispatch(watcherHandleLike(id, 'dislike'));
    } else if (direction === 'right') {
      dispatch(watcherHandleLike(id, 'like'));
    }
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
                className='card cardT'
              >
                <h3 className='like'></h3>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className='infoText' id='like'>
          {' '}
          <span>&#128078;</span>
          <span>&#128077;</span>
        </div>
      </div>
    </div>
  );
}

export default Tinder;
