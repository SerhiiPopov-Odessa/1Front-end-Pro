import { call, put, fork, takeEvery, takeLatest, spawn, all, select, cancel, take } from 'redux-saga/effects'
import {
  fetchRequestedTodos, todosFetchSucceeded, todosFetchFailed,
  deleteTodoRequested, deleteTodoSucceeded, deleteTodoFailed,
  addTodoRequested, addTodoSucceeded, addTodoFailed,
  toggleTodoRequested, toggleTodoSucceeded, toggleTodoFailed,
  updateTodoRequested, updateTodoSucceeded, updateTodoFailed,
} from '../actions/actions'
import { fetchTodoAPI, deleteTodoAPI, toggleTodoAPI, addTodoAPI, updateTodoAPI } from '../../api'
import { v4 as uuidv4 } from 'uuid'

///////////////////// updateTodos ////////////////////////////////////////
function* updateTodos(action) {
  try {
    const todo = action.payload;
    const data = yield call(updateTodoAPI, todo)
    yield put(updateTodoSucceeded(todo))
  } catch (e) {
    yield put(updateTodoFailed(e.message))
  }
}
function* watchUpdateTodos() {
  yield takeEvery(updateTodoRequested.type, updateTodos);
}
//////////////////////// toggleTodos /////////////////////////////////////
function* toggleTodos(action, signal) {
  try {
    const id = action.payload;
    const todo = yield select(state => state.todos.todos.find(todo => todo.id === id));
    const data = yield call(toggleTodoAPI, id, todo, signal)
    !data.id ? yield put(toggleTodoSucceeded({ id })) : yield put(toggleTodoSucceeded(data));
  } catch (e) {
    if (e.name !== 'AbortError') {
      yield put(toggleTodoFailed(e.message));
    }
  }
}

function* watchToggleTodos() {
  let task;
  let abortController = new AbortController();
  while (true) {
    const action = yield take(toggleTodoRequested.type);
    if (task) {
      abortController.abort();
      yield cancel(task);
      abortController = new AbortController();
    }
    task = yield fork(toggleTodos, action, abortController.signal);
  }
}
///////////////////// addTodos ////////////////////////////////////////
function* addTodos(action) {
  try {
    const text = action.payload;
    const todo = { title: text, userId: 1, completed: false, };
    const data = yield call(addTodoAPI, todo)
    yield put(addTodoSucceeded(data))
  } catch (e) {
    yield put(addTodoFailed(e.message))
  }
}
function* watchAddTodos() {
  yield takeEvery(addTodoRequested.type, addTodos);
}
////////////////////// deleteTodos ///////////////////////////////////////
function* deleteTodos(action, signal) {
  try {
    let deleteTodo = Array.isArray(action.payload) ? action.payload : [action.payload];
    for (const todo of deleteTodo) {
      yield call(deleteTodoAPI, todo.id, signal);
    }
    //const id = action.payload;
    //yield call(deleteTodoAPI, id)
    yield put(deleteTodoSucceeded(deleteTodo))
  } catch (e) {
    yield put(deleteTodoFailed(e.message))
  }
}
function* watchDeleteTodos() {
  let task;
  let abortController = new AbortController();
  while (true) {
    const action = yield take(deleteTodoRequested.type);
    if (task) {
      abortController.abort();
      yield cancel(task);
      abortController = new AbortController();
    }
    task = yield fork(deleteTodos, action, abortController.signal);
  }
}
///////////////////// fetchTodos //////////////////////////////////////
function* fetchTodos(action, signal) {
  try {
    const todos = yield call(fetchTodoAPI, signal)
    yield put(todosFetchSucceeded(todos))
  } catch (e) {
    yield put(todosFetchFailed(e.message))
  }
}
function* watchFetchTodos() {
  let task;
  let abortController = new AbortController();
  while (true) {
    const action = yield take(fetchRequestedTodos.type);
    if (task) {
      abortController.abort();
      yield cancel(task);
      abortController = new AbortController();
    }
    task = yield fork(fetchTodos, action, abortController.signal);
  }
}

///////////////////////////////////////////////////////////
// Загрузка при входе на страницу
/* function* loadBasicData() {
  yield all([
    fork(auth),
    fork(loadUsers)
  ])
} */
///////////////////////////////////////////////////////////
function* rootSaga() {
  const sagas = [watchFetchTodos, watchDeleteTodos, watchAddTodos, watchToggleTodos, watchUpdateTodos];
  const retrySagas = sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log("Error rootSagas : ", e);
        }
      }
    })
  });

  yield all(retrySagas);
}

export default rootSaga