import { call, put, takeEvery } from 'redux-saga/effects';
import { loadingStart, loadingTodo} from '../actioncreators/actionsSaga';
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




function* deleteLook(id) {
  try {
    // const result = yield call(deleteFetch)
    // yield put(deleteLookSaga(id))
    
  } catch (error) {
    console.log(error)
  }
}

// Функция-наблюдатель.
function* sagas() {
  yield takeEvery(actionType.saga, loadTodo);
  yield takeEvery(actionType.deleteLookSaga, deleteLook)

}

export default sagas;
