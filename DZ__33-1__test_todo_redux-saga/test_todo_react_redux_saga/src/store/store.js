import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './rooteReducer.mjs'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware();

/* export const store = configureStore({
    reducer: counterSlice.reducer
}); */

export const store = configureStore({
  reducer: {
    todos: counterSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    /* {
      thunk: false, // если нужно отключить  thunk
    } */
  ).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)