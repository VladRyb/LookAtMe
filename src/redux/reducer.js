import actionType from './actions';
// import user from '../faker';
import actions from './actions';

import firebase from 'firebase';

const defaultState = {
  statusSession: false,
  user: { name: null, head: [], body: [], legs: [], feet: [], lookis: [] },
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
  // headUrl: [],
  // bodyUrl: [],
  // legsUrl: [],
  // lapkiUrl: [],
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
        uid: action.user.uid,
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
      return { ...state, statusSession: false, user: { name: null } };
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

    case actionType.head:
      return {
        ...state,
        user: {
          ...state.user,
          head: [action.head, ...state.user.head,],
        }
      };
    case actionType.body:
      return {
        ...state,
        user: {
          ...state.user,
          body: [action.body, ...state.user.body,],
        }
      };
    case actionType.legs:
      return {
        ...state,
        user: {
          ...state.user,
          legs: [action.legs, ...state.user.legs,],
        }
      };
    case actionType.feet:
      return {
        ...state,
        user: {
          ...state.user,
          feet: [action.feet, ...state.user.feet,],
        }
      };
    case actionType.lookis:
      console.log('actionType.looks',action.lookis)
      return {
        ...state,
        user: {
          ...state.user,
          lookis: [action.lookis, ...state.user.lookis,],
        }
      };
    case actionType.arrImg:
      return {
        ...state,
        user: {
          ...state.user,
          head: action.head,
          body: action.body,
          legs: action.legs,
          feet: action.feet,
          lookis: action.lookis,
        },
      };
    default:
      return state;
  }
};

export default reducer;
