import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRequestedTodos } from '../../store/actions/actions'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import DeleteTodoBlock from './DeleteTodoBlock'
import styles from './AppTodo.module.css';

const AppTodo = () => {

    const dispatch = useDispatch();
    const { todos, status, error } = useSelector((state) => state.todos)
    console.log('TODOS FROM STORE:', todos)
    console.log(`status: ${status}, error: ${error}`)

    const completedTodos = todos ? todos.filter(todo => todo.completed) : [];

    console.log('completedTodos :', completedTodos)

    useEffect(() => {
        dispatch(fetchRequestedTodos());
    }, []);

    return (
        <div className={styles.appTodoContainer}>
            <h2>Todo React Redux-Saga https://jsonplaceholder.typicode.com/todos</h2>
            <TodoForm />
            <DeleteTodoBlock completedTodos={completedTodos} todos={todos}/>
            {/* {!!todos.length && <DeleteTodoBlock completedTodos={completedTodos} />} */}
            {status === "loading" && <h2 className={styles.todoLoding}>Loading ...</h2>}
            {error && <h2 className={styles.todoError}> Error: {error}</h2>}
            <TodoList todos={todos} />
        </div>
    );
}
export default AppTodo;