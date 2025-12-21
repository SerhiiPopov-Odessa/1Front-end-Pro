import { useSelector} from 'react-redux'
import Todo from './Todo'
import styles from './TodoList.module.css';
function TodoList({ deleteTodo, toggleTodo}) {
    const todos = useSelector((state) => state.todos)
    console.log('TODOS FROM STORE:', todos)
    return (
        <div className={styles.todoListContainer}>
            {/* !todos.length */todos.length === 0 && <h3>Todo list is empty</h3>}
            {todos.map( (todo) => <Todo key={todo.id} todo={todo}  deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> )}
        </div>
    );
}
export default TodoList;
