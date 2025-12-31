import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import {
  fetchRequestedTodos, todosFetchSucceeded, todosFetchFailed,
  deleteTodoRequested, deleteTodoSucceeded, deleteTodoFailed,
  addTodoRequested, addTodoSucceeded, addTodoFailed,
  toggleTodoRequested, toggleTodoSucceeded, toggleTodoFailed,
  updateTodoRequested, updateTodoSucceeded, updateTodoFailed
} from './actions/actions'

export const counterSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    //addTodo: (state, actions) => {
    //  state.todos.push(actions.payload);
    //},
    //deleteTodo: (state, actions) => {
    //  state.todos = state.todos.filter(todo => todo.id !== actions.payload)
    //},
    /* toggleTodo: (state, actions) => {
      const todo = state.todos.find(todo => todo.id === actions.payload)
      if (todo) {
        todo.completed = !todo.completed;
      }
    }, */
  },
  extraReducers: (builder) => {
    ///////////////////////// fetchTodo ////////////////////////////////
    builder.addCase(fetchRequestedTodos, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(todosFetchSucceeded, (state, action) => {
      console.log("action.payload store Succeeded: ", action.payload)
      state.status = 'resolved';
      state.todos = action.payload;
    });
    builder.addCase(todosFetchFailed, (state, action) => {
      console.log("action.payload store Failed: ", action.payload)
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// addTodo ////////////////////////////////
    builder.addCase(addTodoRequested, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(addTodoSucceeded, (state, action) => {
      state.status = 'resolved';
      state.todos.unshift(action.payload);
    });
    builder.addCase(addTodoFailed, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// deleteTodo ////////////////////////////////
    builder.addCase(deleteTodoRequested, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(deleteTodoSucceeded, (state, action) => {
      let idsToDelete = action.payload;
      // Если пришли в idsToDelete массив объектов, извлекаем массив id
      if (Array.isArray(idsToDelete) && typeof idsToDelete[0] === 'object') {
        idsToDelete = idsToDelete.map(obj => obj.id);
      } else if (!Array.isArray(idsToDelete)) {
        idsToDelete = [idsToDelete];
      }
      state.todos = state.todos.filter(todo => !idsToDelete.includes(todo.id));
      state.status = 'resolved';
    });
    /* builder.addCase(deleteTodoSucceeded, (state, action) => {
      console.log("action.payload store deleteTodoSucceeded: ", action.payload)
      state.status = 'resolved';
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }); */
    builder.addCase(deleteTodoFailed, (state, action) => {
      console.log("action.payload store deleteTodoFailed: ", action.payload)
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// toggleTodo ////////////////////////////////

    builder.addCase(toggleTodoRequested, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(toggleTodoSucceeded, (state, action) => {
      console.log("action.payload.id store toggleTodo: ", action.payload)
      state.status = 'resolved';
      state.error = null;
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed;
      }
    });
    builder.addCase(toggleTodoFailed, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// updateTodo ////////////////////////////////
    builder.addCase(updateTodoRequested, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateTodoSucceeded, (state, action) => {
      state.status = 'resolved';
      state.error = null;
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.title = action.payload.title;
      }
    });
    builder.addCase(updateTodoFailed, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
})

export const { addTodo, deleteTodo, toggleTodo } = counterSlice.actions

