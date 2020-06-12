import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function OldLooks() {
  const state = useSelector((state) => state)
  return (
    state.userLooks.map((element) => {
      return (
        <div className='look'>
        {element.photo ? <div className='wrapper'><div className='photo-container'><img src={element.photo} alt='photo'/></div></div> : <div className='wrapper'><div className='multi-photo-container'><img src={element.head} alt='head'  /> <img src={element.body} alt='body'  /><img src={element.legs} alt='legs'  /><img src={element.feet} alt='feet'  alt='feet'  /></div></div>}
        <h2>{element.name}</h2>
        <div className='tags'>
          {element.tags.map((element2) => {
            return <div className='tag'>{element2}</div>;
          })}
        </div>
        <div className='d-flex flex-row-reverse bd-highlight align-content-end'>
        <Link to='/car' className='p-2 bd-highlight'>Изменить</Link>
        <span className='p-2 bd-highlight'> Удалить</span>
        </div>
      </div>
      )
    }))
}

export default OldLooks;