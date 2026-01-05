import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { fetchTodoThunk, deleteTodoThunk, toggleTodoThunk, addTodoThunk } from './thunks/index'

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
    toggleTodo: (state, actions) => {
      const todo = state.todos.find(todo => todo.id === actions.payload)
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    ///////////////////////// fetchTodoThunk ////////////////////////////////
    builder.addCase(fetchTodoThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }); 
    builder.addCase(fetchTodoThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    });
    builder.addCase(fetchTodoThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// addTodoThunk ////////////////////////////////
    builder.addCase(addTodoThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }); 
    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.todos.unshift(action.payload);
    });
    builder.addCase(addTodoThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// deleteTodoThunk ////////////////////////////////
    builder.addCase(deleteTodoThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }); 
    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    });
    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    ///////////////////////// toggleTodoThunk ////////////////////////////////
    builder.addCase(toggleTodoThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    }); 
    builder.addCase(toggleTodoThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.error = null;
    });
    builder.addCase(toggleTodoThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
})

export const { addTodo, deleteTodo, toggleTodo } = counterSlice.actions

