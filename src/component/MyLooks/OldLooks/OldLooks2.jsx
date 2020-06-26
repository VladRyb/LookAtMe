import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  watcherDeleteLook,
  watcherHandleToggle,
} from "../../../redux/actioncreators/actionsSaga";
import { OKShareButton, VKShareButton, OKIcon, VKIcon } from "react-share";

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
      <>
        <div id="containerloks" class="flexChild rowParent">
          <div id="rowChild95896" class="flexChild">
            {element.ImgUrl ? (
              <img
                src={element.ImgUrl}
                className="card-img"
                alt="photo"
                style={{ height: "250px", width: "200px" }}
              />
            ) : (
              <div id="containerq" className="flexChild rowParent">
                {/* <div id="rowChild93188" className="flexChild columnParent"> */}
                <div id="columnChild38068" className="flexChild rowParent">
                  <div id="rowChild47552" className="flexChild">
                    {element.head ? (
                      <img
                        src={element.head.imgUrl}
                        className="card-img"
                        alt="photo"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    ) : (
                      <img
                        src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                        className="card-img"
                      />
                    )}
                    {element.body ? (
                      <img
                        src={element.body.imgUrl}
                        className="card-img"
                        alt="photo"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
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
                      <img
                        src={element.legs.imgUrl}
                        className="card-img"
                        alt="photo"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    ) : (
                      <img
                        src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                        className="card-img"
                      />
                    )}
                    {element.feet ? (
                      <img
                        src={element.feet.imgUrl}
                        className="card-img"
                        alt="photo"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    ) : (
                      <img
                        src="https://www.clipartsfree.net/svg/61688-black-question-mark-square-icon-vector.svg"
                        className="card-img"
                      />
                    )}
                  </div>
                </div>
              </div>
              // </div>
            )}
          </div>

          {/* <div id="rowChild65972" class="flexChild columnParent"> */}
          <div id="columnChild58421" class="flexChild rowParent">
            <div id="rowChild92572" class="flexChild rowParent">
              <div id="rowChild16716" class="flexChild columnParent">
                <div
                  id="columnChild23845"
                  class="flexChild rowParent columnParent"
                >
                  <div id="columnChild90075" class="flexChild columnParent">
                    <div id="columnChild91059" class="flexChild">
                      {" "}
                      <h4>{element.name}</h4>
                    </div>

                    <div id="columnChild88933" class="flexChild">
                      {element.tags.map((element2) => {
                        return (
                          <span
                            className="tags badge badge-pill badge-dark"
                            style={{ minHeight: "1em" }}
                          >
                            {element2}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div id="columnChild80137" class="flexChild rowParent">
                    <div id="rowChild39726" class="flexChild rowParent">
                      <div id="rowChild67747" class="flexChild">
                        <VKShareButton
                          url={"https://lookatme-31fb3.web.app/"}
                          title={`Приложение для создания луков и хранения своей одежды!`}
                          image={element.ImgUrl}
                          className="VKicon"
                        >
                          <VKIcon size={32} round />
                        </VKShareButton>
                      </div>

                      <div id="rowChild8133" class="flexChild">
                        <OKShareButton
                          url={"https://lookatme-31fb3.web.app/"}
                          image={element.ImgUrl}
                          className="Okicon"
                        >
                          <OKIcon size={32} round />
                        </OKShareButton>
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
