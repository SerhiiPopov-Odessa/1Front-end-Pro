import { useDispatch } from 'react-redux'
import {deleteTodo, toggleTodo} from '../../store/rooteReducer.mjs'
import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'
import styles from './Todo.module.css';

function Todo ({todo, }){
  const dispatch = useDispatch()
  return(
    <div className={`${styles.todo} ${todo.isCompleted && styles.completedTodo }`} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => dispatch(deleteTodo(todo.id))} />
      <FaCheck className={styles.checkIcon} onClick={() => dispatch(toggleTodo(todo.id))} />
    </div>

  ) 
}
export default Todo;
