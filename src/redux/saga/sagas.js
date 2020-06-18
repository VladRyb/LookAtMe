import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadingStart,
  loadingTodo,
  deleteLook,
  deleteDress,
  handleToggle1,
  loadingCol,
  handleLike,
} from '../actioncreators/actionsSaga';
import actionType from '../actions';
import firebase from 'firebase';
import { act } from 'react-dom/test-utils';
const database = firebase.firestore();

// function* loadTodo() {
//   try {
//     yield put(loadingStart());
//     const result = yield call(fetchTodo);
//     yield put(loadingTodo(result.todo));
//   } catch (error) {
//     console.log(error);
//   }
// }

async function findU() {
  const userUid = localStorage.getItem('uid');
  const userName = localStorage.getItem('user');

  const body = await firebase
    .firestore()
    .collection('body')
    .where('creator', '==', userUid + '/' + userName)
    .get()
    .then((snapshot) => {
      // console.log('snapshotbody',snapshot)
      return snapshot.docs.map((img) => img.data());
    });

  const head = await firebase
    .firestore()
    .collection('head')
    .where('creator', '==', userUid + '/' + userName)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((img) => img.data());
    });

  const legs = await firebase
    .firestore()
    .collection('legs')
    .where('creator', '==', userUid + '/' + userName)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((img) => img.data());
    });

  const feet = await firebase
    .firestore()
    .collection('feet')
    .where('creator', '==', userUid + '/' + userName)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((img) => img.data());
    });

  const lookis = await firebase
    .firestore()
    .collection('lookis')
    .where('creator', '==', userUid + '/' + userName)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((img) => img.data());
    });
  // dispatch({
  //   type: actionType.arrImg,
  //   body: body,
  //   head: head,
  //   legs: legs,
  //   feet: feet,
  //   lookis: lookis,
  // });
  return { body, head, legs, feet, lookis };
}

async function rewriteData(collection, id) {
  const gotIt = await database.collection(collection).where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.delete();
    });
  });
}

async function handleToggleFB(id, status) {
  const gotIt = await database.collection('lookis').where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.update({ share: status });
    });
  });
}
///start

function* loadColektion() {
  try {
    const result = yield call(findU);
    yield put(loadingCol(result));
  } catch (error) {
    console.log(error);
  }
}
/////

function* deleteLooka({ collection, id }) {
  try {
    rewriteData(collection, id);
    yield put(deleteLook(collection, id));
  } catch (error) {
    console.log(error);
  }
}

function* updateTags({ id }) {
  try {
    updateTags1(id);
    yield 'a';
  } catch (error) {
    console.log(error);
  }
}
function* deleteDressFromBase({ property, id }) {
  try {
    rewriteData(property, id);
    yield put(deleteDress(property, id));
  } catch (error) {
    console.log(error);
  }
}

async function updateTags1(id) {
  const gotIt = await database.collection('lookis').where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.update({ tags: ['success'] });
    });
  });
}

function* HandleToggle({ id, status }) {
  try {
    handleToggleFB(id, status);
    yield put(handleToggle1(id, status));
  } catch (error) {
    console.log(error);
  }
}

function* handleLikeSaga({ id, status }) {
  try {
    console.log('id:' + id, 'status:' + status);
    handleLikeFB(id, status);
    yield put(handleLike(id, status));
  } catch (error) {
    console.log(error);
  }
}

async function handleLikeFB(id, status) {
  if (status === 'like') {
    const gotIt = await database.collection('lookis').where('id', '==', id);
    gotIt.get().then((query) => {
      query.forEach((data) => {
        data.ref.update({ like: firebase.firestore.FieldValue.increment(1) });
      });
    });
  } else {
    const gotIt = await database.collection('lookis').where('id', '==', id);
    gotIt.get().then((query) => {
      query.forEach((data) => {
        data.ref.update({ dislike: firebase.firestore.FieldValue.increment(1) });
      });
    });
  }
}

// Функция-наблюдатель.
function* sagas() {
  // yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.watcherDeleteLook, deleteLooka);
  yield takeEvery(actionType.watcherTest, updateTags);
  yield takeEvery(actionType.deleteDressSaga, deleteDressFromBase);
  yield takeEvery(actionType.watcherHandleLike, handleLikeSaga);
  yield takeEvery(actionType.watcherHandleToggle, HandleToggle);
  yield takeEvery(actionType.loadingColWather, loadColektion);
}

export default sagas;
