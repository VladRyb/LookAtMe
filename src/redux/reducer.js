const defaultState = { statusSession: false, user: null };

async function logOut() {
  await fetch('/logout', {
    method: 'POST',
  });
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const user = { name: action.session.name };
      return {
        ...state,
        statusSession: true,
        user: user,
      };
    case 'LOGOUT':
      logOut();
      localStorage.setItem('session', false);
      localStorage.setItem('user', '');
      return { ...state, statusSession: false, user: null };
    default:
      return state;
  }
};

export default reducer;
