import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, actions) => {
      console.log('REDUCER:', actions.payload)
      state.todos.push({
        text: actions.payload,
        isCompleted: false,
        id: uuidv4(),
      });
    },
    deleteTodo: (state, actions) => {
      console.log('REDUCER:', actions.payload)
      state.todos = state.todos.filter(todo => todo.id !== actions.payload)
    },
    toggleTodo: (state, actions) => {
      console.log('REDUCER:', actions.payload)
      const todo = state.todos.find(todo => todo.id === actions.payload)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    },
  }
})

export const { addTodo, deleteTodo, toggleTodo } = counterSlice.actions
