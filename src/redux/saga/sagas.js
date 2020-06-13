import { call, put, takeEvery } from 'redux-saga/effects';
import { loadingStart, loadingTodo, getUserTest} from '../actioncreators/actionsSaga';
import actionType from '../actions';
const fetchTodo = async () => {
  return await (
    await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
  ).json();
};

function* loadTodo() {
  try {
    yield put(loadingStart());
    const result = yield call(fetchTodo);
    yield put(loadingTodo(result.todo));
  } catch (error) {
    console.log(error);
  }
}

const fetchUserTest = async () => {
  return await (await fetch('http://localhost:4000/user')).json();
};

function* getUserFromServerTest() {
  try {
    // yield put(loadingStart());
    const result = yield call(fetchUserTest);
    yield put(getUserTest(result.user));
  } catch (error) {
    console.log(error);
  }
};

// Функция-наблюдатель.
function* sagas() {
  yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.getUserTestSaga, getUserFromServerTest);

}

export default sagas;
