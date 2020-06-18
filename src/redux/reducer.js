import actionType from './actions';
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
    tags: [],
  },
  dressCategoryFilter: {
    head: null,
    body: null,
    legs: null,
    feet: null,
  },
  dressSeasonFilter: {
    head: null,
    body: null,
    legs: null,
    feet: null,
  },
  lookisShare: [],
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
      localStorage.setItem('photo', null);
      return { ...state, statusSession: false, user: { name: null } };
    case actionType.dressForNewLook:
      return {
        ...state,
        dressForNewLook: {
          ...state.dressForNewLook,
          [action.property]: action.value,
        },
      };
    case actionType.deleteLook:
      const newLooks = state.user.lookis.filter(
        (element) => element.id !== action.id
      );
      return {
        ...state,
        user: { ...state.user, lookis: [...newLooks] },
      };

    case actionType.head:
      return {
        ...state,
        user: {
          ...state.user,
          head: [action.head, ...state.user.head],
        },
      };
    case actionType.body:
      return {
        ...state,
        user: {
          ...state.user,
          body: [action.body, ...state.user.body],
        },
      };
    case actionType.legs:
      return {
        ...state,
        user: {
          ...state.user,
          legs: [action.legs, ...state.user.legs],
        },
      };
    case actionType.feet:
      return {
        ...state,
        user: {
          ...state.user,
          feet: [action.feet, ...state.user.feet],
        },
      };
    case actionType.lookis:
      return {
        ...state,
        user: {
          ...state.user,
          lookis: [...state.user.lookis, action.lookis],
        },
      };
    case actionType.lookisUpd:
      const allOthers = state.user.lookis.filter(
        (element) => element.id !== action.lookis.id
      );
      allOthers.push(action.lookis);
      return {
        ...state,
        user: {
          ...state.user,
          lookis: allOthers,
        },
      };

    case actionType.handleToggle1:
      const query = state.user.lookis.find(
        (element) => element.id === action.id
      );
      const index = state.user.lookis.indexOf(query);
      query.share = action.status;
      state.user.lookis.splice(index, 1, query);
      return {
        ...state,
        user: {
          ...state.user,
        },
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
        lookisShare: action.lookisShare,
      };
    case actionType.deleteTagOnEdit:
      const lookis = state.user.lookis;
      const unEditedLooks = lookis.filter((el) => el.id !== action.id);
      const edtitedLooks = lookis.find((el) => el.id === action.id);
      edtitedLooks.tags = action.tags;
      unEditedLooks.push(edtitedLooks);
      return {
        ...state,
        user: {
          ...state.user,
          lookis: unEditedLooks,
        },
      };
    case actionType.addTag:
      return {
        ...state,
        dressForNewLook: {
          ...state.dressForNewLook,
          tags: [...state.dressForNewLook.tags, action.tag],
        },
      };
    case actionType.deleteTag:
      return {
        ...state,
        dressForNewLook: {
          ...state.dressForNewLook,
          tags: [...action.tags],
        },
      };
    case actionType.onChangeName:
      return {
        ...state,
        dressForNewLook: {
          ...state.dressForNewLook,
          name: action.value,
        },
      };
    case actionType.onChangeNameEdit:
      const lookis1 = state.user.lookis;
      const unEditedLooks1 = lookis1.filter((el) => el.id !== action.id);
      const edtitedLooks1 = lookis1.find((el) => el.id === action.id);
      edtitedLooks1.name = action.value;
      unEditedLooks1.push(edtitedLooks1);
      return {
        ...state,
        user: {
          ...state.user,
          lookis: unEditedLooks1,
        },
      };
    case actionType.addTagEdit:
      const lookis2 = state.user.lookis;
      const unEditedLooks2 = lookis2.filter((el) => el.id !== action.id);
      const edtitedLooks2 = lookis2.find((el) => el.id === action.id);
      edtitedLooks2.tags.push(action.tag);
      unEditedLooks2.push(edtitedLooks2);
      return {
        ...state,
        user: {
          ...state.user,
          lookis: unEditedLooks2,
        },
      };
    case actionType.deleteDress:
      const newDresses = state.user[action.property].filter(
        (el) => el.id !== action.id
      );
      return {
        ...state,
        user: {
          ...state.user,
          [action.property]: newDresses,
        },
      };

    case actionType.clearDressForNewLook:
      return {
        ...state,
        dressForNewLook: {
          head: null,
          body: null,
          legs: null,
          feet: null,
          name: null,
          tags: [],
        },
      };
    case actionType.setDressFilterProperty:
      return {
        ...state,
        [action.filterName]: {
          ...state[action.filterName],
          [action.property]: action.value,
        },
      };
    case actionType.lookisShare:
      return {
        ...state,
        lookisShare: {
          ...state.lookisShare,
          lookisShare: action.lookisShare,
        },
      };
    case actionType.handleLike:
      const queryLiked = state.user.lookis.find(
        (element) => element.id === action.id
      );
      const indexLiked = state.user.lookis.indexOf(queryLiked);
      queryLiked[action.status] = ++queryLiked[action.status];
      state.user.lookis.splice(indexLiked, 1, queryLiked);
      return {
        ...state,
        user: {
          ...state.user,
        },
      };
    default:
      return state;
  }
};

export default reducer;
