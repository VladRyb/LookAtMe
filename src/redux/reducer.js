import actionType from './actions';
// import user from '../faker';
import actions from './actions';

import firebase from 'firebase';

const defaultState = {
  statusSession: false,
  user: null,
  isLoading: null,
  userTest: null,
  dressForNewLook: {
    head: null,
    body: null,
    legs: null,
    feet: null,
    name: null,
    tags: null,
    photo: null,
  },
  headUrl: [],
  bodyUrl: [],
  legsUrl: [],
  lapkiUrl: [],
};

async function logOut() {
  firebase.auth().signOut();
  // await fetch('/logout', {
  //   method: 'POST',
  // });
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.start:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.todo:
      const todo = { todo: action.todo };
      return {
        ...state,
        todos: todo.todo,
        isLoading: false,
      };

    case actionType.login:
      const user = {
        name: action.user.displayName,
        photo: action.user.photoURL,
        uid: action.user.uid
      };
      return {
        ...state,
        statusSession: true,
        user: user,
      };
    case actionType.logout:
      logOut();
      localStorage.setItem('session', false);
      localStorage.setItem('user', '');
      localStorage.setItem('uid', '');
      return { ...state, statusSession: false, user: null };
    case actionType.dressForNewLook:
      return {
        ...state,
        dressForNewLook: {
          ...state.dressForNewLook,
          [action.property]: action.value,
        },
      };
    case actionType.getUserTest:
      return { ...state, user: action.user };

    case actionType.deleteLookSaga:
      const newLooks = state.userTest.looks.filter(
        (element) => element.id !== action.id
      );
      console.log(newLooks);
      console.log(state.userTest.looks);
      return {
        ...state,
        userTest: { ...state.userTest, looks: [...newLooks] },
      };

    case actionType.headUrl:
      return {
        ...state,
        headUrl: [...state.headUrl, action.headUrl],
      };
    case actionType.bodyUrl:
      return {
        ...state,
        bodyUrl: [...state.bodyUrl, action.bodyUrl],
      };
    case actionType.legsUrl:
      return {
        ...state,
        legsUrl: [...state.legsUrl, action.legsUrl],
      };
    case actionType.lapkiUrl:
      return {
        ...state,
        lapkiUrl: [...state.lapkiUrl, action.lapkiUrl],
      };
    case actionType.arrImg:
      return {
        ...state,
        user: {
          ...state.user,
          head: action.arr[1],
          body: action.arr[0],
          legs: action.arr[2],
          feet: action.arr[3],
        },
      };
    default:
      return state;
  }
};

export default reducer;
