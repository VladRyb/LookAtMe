import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLookSaga } from '../../../redux/actioncreators/actionsSaga';

function OldLooks2() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.lookis);
  while (state === undefined) {
    return 'Loading...';
  }
  function deleteLook(id) {
    dispatch(deleteLookSaga(id));
  }
  return state.map((element) => {
    return (
      <div className='card mb-3 ' style={{ width: 450 }} id='loks'>
        <div class='row no-gutters loks'>
          {element.img.ImgUrl ? (
            <div className='col-md-4'>
              <img src={element.img.ImgUrl} className='card-img' alt='photo' />
            </div>
          ) : (
            <div className='col-md-4'>
              <div id='container' class='flexChild rowParent'>
                <div id='rowChild93188' class='flexChild columnParent'>
                  <div id='columnChild38068' class='flexChild rowParent'>
                    <div id='rowChild47552' class='flexChild'>
                      <img
                        src=''
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                    <div id='rowChild999' class='flexChild'>
                      <img
                        src=''
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                  </div>
                  <div id='columnChild9857' class='flexChild rowParent'>
                    <div id='rowChild89645' class='flexChild'>
                      <img
                        src=''
                        className='card-img'
                        alt='photo'
                      />
                    </div>
                    <div id='rowChild9992' class='flexChild'>
                      <img
                        src=''
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
                  to={`/edit/${element.img.ImgId}`}
                  className='p-2 bd-highlight editLink'
                >
                  <i className='fa fa-pencil-square-o'></i>
                </Link>
                <span
                  className='p-2 bd-highlight deleteLink'
                  onClick={() => {
                    deleteLook(element.img.ImgId);
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
