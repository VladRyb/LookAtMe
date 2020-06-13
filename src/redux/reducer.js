import actionType from './actions';
import user from '../faker'

const defaultState = {
  statusSession: false,
  user: null,
  isLoading: null,
  userTest: user,
  dressForNewLook: {
    head: null,
    body: null,
    legs: null,
    feet: null,
    name: null,
    tags: null,
    photo: null,
  },
};

async function logOut() {
  await fetch('/logout', {
    method: 'POST',
  });
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
      const user = { name: action.session.name };
      return {
        ...state,
        statusSession: true,
        user: user,
      };
    case actionType.logout:
      logOut();
      localStorage.setItem('session', false);
      localStorage.setItem('user', '');
      return { ...state, statusSession: false, user: null };
    case actionType.dressForNewLook:
        return { ...state,dressForNewLook:{
          ...state.dressForNewLook,
          [action.property]: action.value,
        }  };
    default:
      return state;
  }
};

export default reducer;
