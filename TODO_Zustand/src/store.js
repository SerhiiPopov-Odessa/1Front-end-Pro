import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';

export const useTodos = create(devtools(persist((set, get) => ({
    /* todos: [
        { id: 1, title: 'Learn JS', completed: true },
        { id: 2, title: 'Learn React', completed: true },
    ], */
    todos: [],
    loading: false,
    error: null,
    // 1 вариант
    /* addTodo: (title) => set(state => {
        const newTodo = { id: uuidv4(), title, completed: false }
        return { todos: [...state.todos, newTodo] }
    }) */

    // 2 вариант сокращённый 
    addTodo: (title) => set(state => ({ todos: [...state.todos, { id: uuidv4(), title, completed: false }] })),

    // 3 вариант  get плохой Если несколько обновлений состояния произойдут почти одновременно, то get().todos
    //может вернуть уже не самое актуальное состояние.
    /* addTodo: (title) => {
        const newTodo = { id: uuidv4(), title, completed: false }
        set({ todos: [...get().todos, newTodo] })
    }, */

    deleteTodo: (todoId) =>
        set(state => ({
            todos: state.todos.filter(todo => todo.id !== todoId)
        })),

    resetTodos: () =>
        set({
            todos: [],
        }),

    deleteCompletedTodos: () =>
        set(state => ({
            todos: state.todos.filter(todo => todo.completed === false)
        })),

    toggleTodo: (todoId) => set(state => ({
        todos: state.todos.map(
            todo => todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
        )
    })),

    editTodo: (todoId, text) => set(state => ({
        todos: state.todos.map(
            todo => todoId === todo.id ? { ...todo, title: text } : todo
        )
    })),

    fetchTodos: async (signal) => {
        set({ loading: true });

        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/todos?_limit=10",
                { signal }
            );

            if (!res.ok) {
                throw new Error("Failed to fetch!");
            }

            const todos = await res.json();

            set({
                todos,
                error: null,
            });
        } catch (error) {
            if (error.name === "AbortError") return;

            set({
                error: error.message,
            });
        } finally {
            set({
                loading: false,
            });
        }
    }
}),
    {
        name: "todos-storage",
    })
))

export const useFilter = create(set => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value })
}))



/* Когда нужен get
Например, если одна функция зависит от другой:
const useCounter = create((set, get) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  incrementTwice: () => {
    get().increment();
    get().increment();
  }
}));
Здесь get() позволяет вызвать другой метод стора.

Или если нужно просто прочитать значение:
const currentTodos = get().todos;
console.log(currentTodos);

Когда get не нужен
Если ты уже используешь функциональную форму set, то текущее состояние приходит в state. */