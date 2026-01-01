import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchTodoAPI, deleteTodoAPI, toggleTodoAPI, addTodoAPI } from "../../api"
import { deleteTodo, toggleTodo, addTodo} from '../../store/rooteReducer.mjs'

export const fetchTodoThunk = createAsyncThunk(
    "todos/fetchTodoThunk",
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchTodoAPI();
            return data; // data.slice(0,10);
        }
        catch (error){
            return rejectWithValue (error.message);
        }
    }
);

export const deleteTodoThunk = createAsyncThunk(
    "todos/deleteTodoThunk",
    async (id, { rejectWithValue }) => {
        try {
            const data = await deleteTodoAPI(id);
            return id;
        }
        catch (error){
            return rejectWithValue (error.message);
        }
    }
);

export const toggleTodoThunk = createAsyncThunk(
    "todos/toggleTodoThunk",
    async (id, { rejectWithValue, dispatch, getState }) => {
        try {
            const todo = getState().todos.todos.find(todo => todo.id === id);
            const data = await toggleTodoAPI(id, todo);
            console.log("toggle res data: ", data);
            dispatch(toggleTodo(id));
        }
        catch (error){
            return rejectWithValue (error.message);
        }
    }
);

export const addTodoThunk = createAsyncThunk(
    "todos/addTodoThunk",
    async (text, { rejectWithValue}) => {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };
            const data = await addTodoAPI(todo);
            console.log("add res data: ", data);
            return data;
        }
        catch (error){
            return rejectWithValue (error.message);
        }
    }
);