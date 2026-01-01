import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './rooteReducer.mjs'

/* export const store = configureStore({
    reducer: counterSlice.reducer
}); */

export const store = configureStore({
  reducer: {
    todos: counterSlice.reducer
  }
});