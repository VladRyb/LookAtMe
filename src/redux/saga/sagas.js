import { call, put, takeEvery } from 'redux-saga/effects';
import { loadingStart, loadingTodo, deleteLook, deleteDress } from '../actioncreators/actionsSaga';
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

async function rewriteData(collection, id) {
  const gotIt = await database.collection(collection).where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.delete();
    });
  });
}

function* deleteLooka({ collection, id }) {
  console.log(collection);
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

// Функция-наблюдатель.
function* sagas() {
  // yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.watcherDeleteLook, deleteLooka);

  yield takeEvery(actionType.watcherTest, updateTags);

  yield takeEvery(actionType.deleteDressSaga, deleteDressFromBase);
}

export default sagas;
