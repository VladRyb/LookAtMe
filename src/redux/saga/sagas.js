import { call, put, takeEvery } from "redux-saga/effects";
import {
  loadingStart,
  loadingTodo,
  deleteLook,
  deleteDress,
} from "../actioncreators/actionsSaga";
import actionType from "../actions";
import firebase from "firebase";
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
  const gotIt = await database.collection(collection).where("id", "==", id);
  gotIt.get().then((query) => {
    query.forEach((data) => {
      data.ref.delete();
    });
  });
}

function* deleteLooka(id) {
  try {
    rewriteData(id.id);
    yield put(deleteLook(id.id));
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

// Функция-наблюдатель.
function* sagas() {
  // yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.watcherDeleteLook, deleteLooka);
  yield takeEvery(actionType.deleteDressSaga, deleteDressFromBase);
}

export default sagas;
