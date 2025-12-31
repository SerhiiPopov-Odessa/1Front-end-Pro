import { useSelector} from 'react-redux'
import Todo from './Todo'
import styles from './TodoList.module.css';
function TodoList({todos}) {
    /* const todos = useSelector((state) => state.todos.todos)
    console.log('TODOS FROM STORE:', todos) */
    return (
        <div className={styles.todoListContainer}>
            {/* !todos.length */todos.length === 0 && <h3>Todo list is empty</h3>}
            {todos.map( (todo) => <Todo key={todo.id} todo={todo}   /> )}
        </div>
    );
}
export default TodoList;
