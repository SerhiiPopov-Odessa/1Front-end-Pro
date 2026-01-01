import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodoThunk } from '../../store/thunks';
import { useSelector} from 'react-redux'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import styles from './AppTodo.module.css';

const AppTodo = () => {
    const status = useSelector((state) => state.todos.status)
    const error = useSelector((state) => state.todos.error)
    console.log(status, error)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTodoThunk());
    },[]);

    return (
        <div className={styles.appTodoContainer}>
            <h2>Todo React Redux-Thunk https://jsonplaceholder.typicode.com/todos</h2>
            <TodoForm  />
            {status === "loding" && <h2 className={styles.todoLoding}>Loading ...</h2>}
            {error && <h2 className={styles.todoError}> Error: {error}</h2>}
            <TodoList  />
        </div>
    );
}
export default AppTodo;