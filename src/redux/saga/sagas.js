import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadingStart,
  loadingTodo,
  deleteLook,
  deleteDress,
  handleToggle1,
} from '../actioncreators/actionsSaga';
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

async function handleToggleFB(id, status) {
  const gotIt = await database.collection('lookis').where('id', '==', id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.update({ share: status });
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

function* HandleToggle({ id, status }) {
  try {
    handleToggleFB(id, status);
    yield put(handleToggle1(id, status));
  } catch (error) {
    console.log(error);
  }
}

// Функция-наблюдатель.
function* sagas() {
  // yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.watcherDeleteLook, deleteLooka);

  yield takeEvery(actionType.watcherTest, updateTags);

  yield takeEvery(actionType.deleteDressSaga, deleteDressFromBase);

  yield takeEvery(actionType.watcherHandleToggle, HandleToggle);
}

export default sagas;
