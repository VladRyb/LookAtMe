import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { watcherTest, watcherDeleteLook } from '../../../redux/actioncreators/actionsSaga';

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
  function deleteTags(id) {
    dispatch(watcherTest(id));
  }
  return allLooks.map((element) => {
    return (
      <div className="card mb-3 " style={{ width: 450 }} id="loks">
        <div className="row no-gutters loks">
          {element.ImgUrl ? (
            <div className="col-md-4">
              <img src={element.ImgUrl} className="card-img" alt="photo" />
            </div>
          ) : (
            <div className="col-md-4">
              <div id="containerq" className="flexChild rowParent">
                <div id="rowChild93188" className="flexChild columnParent">
                  <div id="columnChild38068" className="flexChild rowParent">
                    <div id="rowChild47552" className="flexChild">
                      {element.head ? (
                        <img src={element.head.imgUrl} className="card-img" alt="photo" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                        />
                      )}
                      {element.body ? (
                        <img src={element.body.imgUrl} className="card-img" alt="photo" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                        />
                      )}
                    </div>
                  </div>
                  <div id="columnChild9857" className="flexChild rowParent">
                    <div id="rowChild89645" className="flexChild">
                      {element.legs ? (
                        <img src={element.legs.imgUrl} className="card-img" alt="photo" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                        />
                      )}
                      {element.feet ? (
                        <img src={element.feet.imgUrl} className="card-img" alt="photo" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              {element.tags.map((element2) => {
                return <span className="tags badge badge-pill badge-dark">{element2}</span>;
              })}
              <div className="d-flex flex-row-reverse bd-highlight align-content-end links">
                <Link to={`/edit/${element.id}`} className="p-2 bd-highlight editLink">
                  <i className="fa fa-pencil-square-o"></i>
                </Link>
                <span
                  className="p-2 bd-highlight deleteLink"
                  onClick={() => {
                    deleteLook('lookis', element.id);
                  }}
                >
                  <i className="fa fa-trash-o"></i>
                </span>
                <div class="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                  <label className="custom-control-label" for="customSwitch1">
                    Share
                  </label>
                </div>
                <span
                  className="p-2 bd-highlight deleteLink"
                  onClick={() => {
                    deleteTags(element.id);
                  }}
                >
                  <i className="fa fa-trash-o">delete tags</i>
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
