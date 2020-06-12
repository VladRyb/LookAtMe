/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './myLooks.css';

function MyLooks(props) {
  const state = useSelector((state) => state);
  if (state.newLook) {
    return (
      <div className='mylookswrapper'>
        <div className='look'>
          {state.newLook.photo ? (
            <div className='wrapper'>
              <div className='photo-container'>
                <img src={state.newLook.photo} alt='photo' />
              </div>
            </div>
          ) : (
            <div className='wrapper'>
              <div className='multi-photo-container'>
                <img src={state.newLook.head} alt='head' />{' '}
                <img src={state.newLook.body} alt='body' />
                <img src={state.newLook.legs} alt='legs' />
                <img src={state.newLook.feet} alt='feet' />
              </div>
            </div>
          )}
          <h2>{state.newLook.name}</h2>
          <div className='tags'>
            {state.newLook.tags.map((element2) => {
              return <div className='tag'>{element2}</div>;
            })}
          </div>
          <div className='links'>
            <></>
            <></>
          </div>
        </div>
        {state.userLooks.map((element) => {
          return (
            <div className='look'>
              {element.photo ? (
                <div className='wrapper'>
                  <div className='photo-container'>
                    <img src={element.photo} alt='photo' />
                  </div>
                </div>
              ) : (
                <div className='wrapper'>
                  <div className='multi-photo-container'>
                    <img src={element.head} alt='head' />{' '}
                    <img src={element.body} alt='body' />
                    <img src={element.legs} alt='legs' />
                    <img src={element.feet} alt='feet' alt='feet' />
                  </div>
                </div>
              )}
              <h2>{element.name}</h2>
              <div className='tags'>
                {element.tags.map((element2) => {
                  return <div className='tag'>{element2}</div>;
                })}
              </div>
              <div className='links'>
                <></>
                <></>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {state.userLooks.map((element) => {
          return (
            <div className='look'>
              {element.photo ? (
                <div className='wrapper'>
                  <div className='photo-container'>{element.photo}</div>
                </div>
              ) : (
                <div className='wrapper'>
                  <div className='multi-photo-container'>
                    <img src={element.head} alt='legs' />{' '}
                    <img src={element.body} alt='body' />
                    <img src={element.legs} alt='legs' />
                    <img src={element.feet} alt='feet' />
                  </div>
                </div>
              )}
              <h2>{element.name}</h2>
              <div className='tags'>
                {element.tags.map((element2) => {
                  return <div className='tag'>{element2}</div>;
                })}
              </div>
              <div className='links'>
                <></>
                <></>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyLooks;
