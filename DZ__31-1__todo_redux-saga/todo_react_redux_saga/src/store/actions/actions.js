import { createAction } from '@reduxjs/toolkit'

export const fetchRequestedTodos = createAction('FETCH_REQUESTED_TODOS');
export const todosFetchSucceeded = createAction('TODOS_FETCH_SUCCEEDED');
export const todosFetchFailed = createAction('TODOS_FETCH_FAILED');

export const addTodoRequested = createAction('ADD_TODO_REQUESTED');
export const addTodoSucceeded = createAction('ADD_TODO_SUCCEEDED');
export const addTodoFailed = createAction('ADD_TODO_FAILED');

export const deleteTodoRequested = createAction('DELETE_TODO_REQUESTED');
export const deleteTodoSucceeded = createAction('DELETE_TODO_SUCCEEDED');
export const deleteTodoFailed = createAction('DELETE_TODO_FAILED');

export const toggleTodoRequested = createAction('TOGGLE_TODO_REQUESTED');
export const toggleTodoSucceeded = createAction('TOGGLE_TODO_SUCCEEDED');
export const toggleTodoFailed = createAction('TOGGLE_TODO_FAILED');

export const updateTodoRequested = createAction('UPDATE_TODO_REQUESTED');
export const updateTodoSucceeded = createAction('UPDATE_TODO_SUCCEEDED');
export const updateTodoFailed = createAction('UPDATE_TODO_FAILED');

