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
  headImages:[
    'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
    'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
    'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
    'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
    'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
  ],
  bodyImages: ['https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
    'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
    'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
    'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
    'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',],
  pansImages : ['https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
    'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
    'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
    'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
    'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',],
  lapkiImages : ['http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
    'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
    'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
    'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
    'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',]

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
