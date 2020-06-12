import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function NewLook() {
  const state = useSelector((state) => state)
  return (
    <div className='look'>
      {state.newLook.photo ? <div className='wrapper'><div className='photo-container'><img src={state.newLook.photo} alt='photo'/></div></div> : <div className='wrapper'><div className='multi-photo-container'><img src={state.newLook.head} alt='head'  /> <img src={state.newLook.body} alt='body'  /><img src={state.newLook.legs} alt='legs'  /><img src={state.newLook.feet} alt='feet' /></div></div>}
      <h2>{state.newLook.name}</h2>
      <div className='tags' >
      {state.newLook.tags.map((element2) => {
        return <div className='tag'>{element2}</div>;
      })}</div>
      <div className='d-flex flex-row-reverse bd-highlight align-content-end'>
        <Link to='/car' className='p-2 bd-highlight'>Изменить</Link>
        <span className='p-2 bd-highlight'> Удалить</span>
        <span className='p-2 bd-highlight'> Сохранить</span>
      </div>
    </div>
)}

export default NewLook