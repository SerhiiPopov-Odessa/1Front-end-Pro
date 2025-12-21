import TodoList from './TodoList'
import TodoForm from './TodoForm'
import styles from './AppTodo.module.css';

const AppTodo = () => {
    
    return (
        <div className={styles.appTodoContainer}>
            <h2>Todo React Redux</h2>
            <TodoForm  />
            <TodoList  />
        </div>
    );
}
export default AppTodo;