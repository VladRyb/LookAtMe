import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { watcherDeleteLook } from '../../../redux/actioncreators/actionsSaga';

function OldLooks2() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const allLooks = useSelector((state) => state.user.lookis);

  // const userUid = localStorage.getItem('uid');
  // const userName = localStorage.getItem('user');

  while (user.uid === undefined) {
    return 'Loading...';
  }
  while (allLooks === undefined) {
    return 'Loading...';
  }
  const userName = user.name;
  const userId = user.uid;
  // const state = allLooks.filter((element) => element.creator === `${userId}/${userName}`);
  function deleteLook(id) {
    dispatch(watcherDeleteLook(id));
  }
  return allLooks.map((element) => {
    return (
      <div className='card mb-3 ' style={{ width: 450 }} id='loks'>
        <div className='row no-gutters loks'>
          {element.ImgUrl ? (
            <div className='col-md-4'>
              <img src={element.ImgUrl} className='card-img' alt='photo' />
            </div>
          ) : (
            <div className='col-md-4'>
              <div id='container' className='flexChild rowParent'>
                <div id='rowChild93188' className='flexChild columnParent'>
                  <div id='columnChild38068' className='flexChild rowParent'>
                    <div id='rowChild47552' className='flexChild'>
                      <img
                        src={element.head.imgUrl}
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                    <div id='rowChild999' className='flexChild'>
                      <img
                        src={element.body.imgUrl}
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                  </div>
                  <div id='columnChild9857' className='flexChild rowParent'>
                    <div id='rowChild89645' className='flexChild'>
                      <img
                        src={element.legs.imgUrl}
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                    <div id='rowChild9992' className='flexChild'>
                      <img
                        src={element.feet.imgUrl}
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{element.name}</h5>
              {element.tags.map((element2) => {
                return (
                  <span className='tags badge badge-pill badge-dark'>
                    {element2}
                  </span>
                );
              })}
              <div className='d-flex flex-row-reverse bd-highlight align-content-end links'>
                <Link
                  to={`/edit/${element.id}`}
                  className='p-2 bd-highlight editLink'
                >
                  <i className='fa fa-pencil-square-o'></i>
                </Link>
                <span
                  className='p-2 bd-highlight deleteLink'
                  onClick={() => {
                    deleteLook(element.id);
                  }}
                >
                  <i className='fa fa-trash-o'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default OldLooks2;
