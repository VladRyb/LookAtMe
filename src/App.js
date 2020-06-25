import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import MyLooks2 from "./component/MyLooks/MyLooks2";
import Dresser from "./component/Dresser/Dresser";
import "./App.css";

import { loadingColWather } from "./redux/actioncreators/actionsSaga";

function App(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const userUid = localStorage.getItem("uid");

  useEffect(() => {
    dispatch(loadingColWather());
  }, [userUid]);

  return (
    <>
      <BrowserRouter>
        <NavBar user={store.user} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mylooks">
          <MyLooks2 />
        </Route>

        <Route exact path="/dresser">
          <Dresser />
        </Route>
      </BrowserRouter>
    </>
  );
}
export default App;
