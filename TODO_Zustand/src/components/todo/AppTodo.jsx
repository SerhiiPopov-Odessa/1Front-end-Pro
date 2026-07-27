import { useEffect } from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import TotalTodos from './TotalTodos'
import DeleteTodoBlock from './DeleteTodoBlock'
import FilterTodo from './FilterTodo'
import styles from './AppTodo.module.css';
import { useTodos } from '../../store';
import { useShallow } from "zustand/react/shallow";

const AppTodo = () => {
   const {todos, loading, error, fetchTodos} = useTodos( useShallow((state) => ({
    todos:state.todos,
    loading: state.loading,
    error: state.error,
    fetchTodos: state.fetchTodos
   })))

   const completedTodos = todos.filter(todo => todo.completed);

    /* const dispatch = useDispatch();
    const { todos, status, error } = useSelector((state) => state.todos)
     */

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className={styles.appTodoContainer}>
            <h2 className="mb-2 text-xl text-fuchsia-700/75 font-semibold text-center bg-amber-300 w-fit mx-auto px-4 rounded-2xl">Todo React Zustand </h2>
            <p className="mx-auto mb-4 text-lg">https://jsonplaceholder.typicode.com/todos</p>
            <TodoForm />
            <DeleteTodoBlock completedTodos={completedTodos} /* todos={todos} *//>
            <FilterTodo />
            {/* {!!todos.length && <DeleteTodoBlock completedTodos={completedTodos} />} */}
            {loading && <h2 className={styles.todoLoding}>Loading ...</h2>}
            {error && <h2 className={styles.todoError}> Error: {error}</h2>}
            <TodoList /* todos={todos} */  />
            <TotalTodos />
        </div>
    );
}
export default AppTodo;