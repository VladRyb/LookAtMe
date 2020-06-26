import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { watcherDeleteLook, watcherHandleToggle } from '../../../redux/actioncreators/actionsSaga';
import { OKShareButton, VKShareButton, OKIcon, VKIcon } from 'react-share';


function OldLooks2() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const allLooks = useSelector((state) => state.user.lookis);

  while (user.uid === undefined) {
    return "Loading...";
  }
  while (allLooks === undefined) {
    return "Loading...";
  }

  function deleteLook(collection, id) {
    dispatch(watcherDeleteLook(collection, id));
  }

  function handleToggle(id, status) {
    if (status === true) {
      console.log("was true");
      dispatch(watcherHandleToggle(id, false));
    } else {
      console.log("was false");
      dispatch(watcherHandleToggle(id, true));
    }
  }
  return allLooks.map((element) => {
    return (
      <div
        className="card mb-3"
        style={{ maxWidth: '150%', maxHeight: 200, color: 'white' }}
        id="loks"
      >
        <div className="row no-gutters loks">
          {element.ImgUrl ? (
            <div className="col-md-4">
              <img src={element.ImgUrl} className="card-img" alt="lookPhoto" />
            </div>
          ) : (
            <div className="col-md-4">
              <div id="containerq" className="flexChild rowParent">
                <div id="rowChild93188" className="flexChild columnParent">
                  <div id="columnChild38068" className="flexChild rowParent">
                    <div id="rowChild47552" className="flexChild">
                      {element.head ? (
                        <img src={element.head.imgUrl} className="card-img" alt="head" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                          alt="head"
                        />
                      )}
                      {element.body ? (
                        <img src={element.body.imgUrl} className="card-img" alt="body" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                          alt="body"
                        />
                      )}
                    </div>
                  </div>
                  <div id="columnChild9857" className="flexChild rowParent">
                    <div id="rowChild89645" className="flexChild">
                      {element.legs ? (
                        <img src={element.legs.imgUrl} className="card-img" alt="legs" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                          alt="legs"
                        />
                      )}
                      {element.feet ? (
                        <img src={element.feet.imgUrl} className="card-img" alt="feet" />
                      ) : (
                        <img
                          src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                          className="card-img"
                          alt="feet"
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
              <h5 className="card-title" id="card-title" style={{ color: 'white' }}>
                {element.name}
              </h5>

              {element.tags.map((element2) => {
                return (
                  <span className="tags badge badge-pill badge-dark" style={{ minHeight: '1em' }}>
                    {element2}
                  </span>
                );
              })}
              {element.ImgUrl ? (
                <div className="shareIcons">
                  <VKShareButton
                    url={'https://lookatme-31fb3.web.app/'}
                    title={`Приложение для создания луков и хранения своей одежды!`}
                    image={element.ImgUrl}
                    className="VKicon"
                  >
                    <VKIcon size={32} round />
                  </VKShareButton>
                  <OKShareButton
                    url={'https://lookatme-31fb3.web.app/'}
                    image={element.ImgUrl}
                    className="Okicon"
                  >
                    <OKIcon size={32} round />
                  </OKShareButton>
                </div>
              ) : (
                <span></span>
              )}
              <div className="iconsLook">
                {element.ImgUrl ? (
                  <div>
                    {element.share ? (
                      <div className="custom-control custom-switch shareEgorZ">
                        <input
                          onClick={() => handleToggle(element.id, element.share)}
                          type="checkbox"
                          className="custom-control-input"
                          id={`customSwitch${element.id}`}
                          checked
                        />
                        <label className="custom-control-label" for={`customSwitch${element.id}`}>
                          Публичный
                        </label>
                        <div></div>
                      </div>
                    ) : (
                      <div className="custom-control custom-switch shareEgorZ">
                        <input
                          onClick={() => handleToggle(element.id, element.share)}
                          type="checkbox"
                          className="custom-control-input"
                          id={`customSwitch${element.id}`}
                        />
                        <label className="custom-control-label" for={`customSwitch${element.id}`}>
                          Приватный
                        </label>

                      </div>
                    </div>

                    <div id="rowChild52401" class="flexChild columnParent">
                      <div id="columnChild44993" class="flexChild rowParent">
                        <div id="rowChild69848" class="flexChild">
                          {element.share ? (
                            <div className="custom-control custom-switch shareEgorZ">
                              <input
                                onClick={() =>
                                  handleToggle(element.id, element.share)
                                }
                                type="checkbox"
                                className="custom-control-input"
                                id={`customSwitch${element.id}`}
                                checked
                              />
                              <label
                                className="custom-control-label"
                                for={`customSwitch${element.id}`}
                              >
                                Публичный
                              </label>
                              <div></div>
                            </div>
                          ) : (
                            <div className="custom-control custom-switch shareEgorZ">
                              <input
                                onClick={() =>
                                  handleToggle(element.id, element.share)
                                }
                                type="checkbox"
                                className="custom-control-input"
                                id={`customSwitch${element.id}`}
                              />
                              <label
                                className="custom-control-label"
                                for={`customSwitch${element.id}`}
                              >
                                Приватный
                              </label>
                            </div>
                          )}
                        </div>

                        <div id="rowChild29469" class="flexChild">
                          <span
                            className="p-2 bd-highlight deleteLink"
                            onClick={() => {
                              deleteLook("lookis", element.id);
                            }}
                          >
                            <i className="fa fa-trash-o"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div>
                  <span
                    className="p-2 bd-highlight deleteLink"
                    onClick={() => {
                      deleteLook('lookis', element.id);
                    }}
                  >
                    <i className="fa fa-trash-o"></i>
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
}

export default OldLooks2;
