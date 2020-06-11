import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import actionType from './redux/actions';

import './App.css';

function App(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function user() {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      const result = await response.json();
      if (result.session) {
        dispatch({ type: actionType.login, session: result.session });
        const user = result.session.name;
        localStorage.setItem('session', true);
        localStorage.setItem('user', user);
      } else {
        localStorage.setItem('session', false);
        localStorage.setItem('user', '');
      }
    }
    user();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar user={props.state.user} logout={props.deleteSission} />
        <Route exact path='/'>
          <Home />
        </Route>
      </BrowserRouter>
    </>
  );
}
const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSession: (session) => {
      return dispatch({ type: 'LOGIN', session });
    },
    deleteSission: () => {
      return dispatch({ type: 'LOGOUT' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
