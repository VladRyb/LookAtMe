import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import NavBar from './component/NavBar';
import SingUp from './component/SingUp';
import './App.css';

function App(props) {
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
        props.addSession(result.session);

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
        <Route path='/login'>
          <Login state={props} />
        </Route>
        <Route path='/singup'>
          <SingUp state={props} />
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
