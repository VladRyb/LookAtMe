import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function OldLooks() {
  const state = useSelector((state) => state.userTest.looks)
  return (
    state.map((element) => {
      console.log(element.head.imageUrl)
      return (
        <div className='look'>
        {element.photo ? <div className='wrapper'><div className='photo-container'><img src={element.photo} alt='photo'/></div></div> : <div className='wrapper'><div className='multi-photo-container'><img src={element.head.imageUrl} alt='head'  /> <img src={element.body.imageUrl} alt='body'  /><img src={element.legs.imageUrl} alt='legs'  /><img src={element.feet.imageUrl} alt='feet'  alt='feet'  /></div></div>}
        <h3>{element.name}</h3>
        <div className='tags'>
          {element.tags.map((element2) => {
            return <div className='tag'>{element2}</div>;
          })}
        </div>
        <div className='d-flex flex-row-reverse bd-highlight align-content-end'>
        <Link to={`/edit/${element.id}`} className='p-2 bd-highlight'>Изменить</Link>
        <span className='p-2 bd-highlight'> Удалить</span>
        </div>
      </div>
      )
    }))
}

export default OldLooks;