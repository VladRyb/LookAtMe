import { call, put, takeEvery } from 'redux-saga/effects';
import { loadingStart, loadingTodo, deleteLook } from '../actioncreators/actionsSaga';
import actionType from '../actions';
import firebase from 'firebase';
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

async function rewriteData(id) {
  const gotIt = await database.collection('lookis').where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.delete();
    });
  });
}

function* deleteLooka({ id }) {
  try {
    rewriteData(id);
    yield put(deleteLook(id));
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

async function updateTags1(id) {
  const gotIt = await database.collection('lookis').where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.update({ tags: ['success'] });
    });
  });
}

// Функция-наблюдатель.
function* sagas() {
  // yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.watcherDeleteLook, deleteLooka);
  yield takeEvery(actionType.watcherTest, updateTags);
}

export default sagas;
