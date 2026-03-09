import { useDispatch } from 'react-redux'
import { deleteTodoThunk, toggleTodoThunk } from '../../store/thunks';
import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'
import styles from './Todo.module.css';
import clsx from "clsx";

function Todo ({todo, }){
  const dispatch = useDispatch()
  return(
    <div className={`${clsx("w-full sm:w-[95%] xl:w-[60%]", styles.todo)} ${todo.completed && styles.completedTodo }`} onDoubleClick={() => dispatch(deleteTodoThunk(todo.id))}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.title}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => dispatch(deleteTodoThunk(todo.id))} />
      <FaCheck className={styles.checkIcon} onClick={() => dispatch(toggleTodoThunk(todo.id))} />
    </div>
  ) 
}
export default Todo;
