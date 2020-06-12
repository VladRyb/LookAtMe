import actionType from './actions';

const defaultState = {
  statusSession: false,
  user: null,
  isLoading: null,
  todos: [],
  newLook: {
    head: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
    body: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
    legs: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
    feet: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
    photo: null,
    name: 'New Look test',
    tags: ['Зимний'],
  },
  userLooks: [
    {
      head: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      body: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      legs: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      feet: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      photo: null,
      name: 'New Look test',
      tags: ['Зимний'],
    },
    {
      head: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      body: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      legs: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      feet: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      photo: null,
      name: 'New Look test',
      tags: ['Зимний', 'Красный', 'Красный', 'Красный', 'Красный', 'Красный', 'Красный', 'Красный', 'Красный', 'Красный'],
    },
    {
      head: null,
      body: null,
      legs: null,
      feet: null,
      photo: 'https://flink.apache.org/img/logo/png/100/flink_squirrel_100_color.png',
      name: 'New Look test',
      tags: ['Зимний'],
    },
  ],
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
    default:
      return state;
  }
};

export default reducer;
