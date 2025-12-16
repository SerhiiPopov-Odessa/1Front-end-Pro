import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import styles from './AppTodo.module.css';

const AppTodo = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuidv4(),
        }
        //setTodos([...todos, newTodo])
        setTodos(prevTodos => [...prevTodos, newTodo]);

    const deleteTodoHandler = (id) => {
       //setTodos(todos.filter((todo) => todo.id !== id))
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
    }

     const toggleTodoHandler = (id) => {
        //setTodos(todos.map( (todo) => todo.id === id ? {...todo, isCompleted:!todo.isCompleted } : {...todo} ))
        setTodos(prevTodos => prevTodos.map( (todo) => todo.id === id ? {...todo, isCompleted:!todo.isCompleted } : {...todo} ))
    }

    return (
        <div className={styles.appTodoContainer}>
            <h2>Todo App</h2>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
        </div>
    );
}
export default AppTodo;