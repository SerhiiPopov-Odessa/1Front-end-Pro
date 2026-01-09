import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodoRequested, toggleTodoRequested, updateTodoRequested } from '../../store/actions/actions'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { BsPencilSquare } from "react-icons/bs";
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css';

function Todo({ todo, }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(todo.title)

  const startEdit = () => {
    setText(todo.title)
    setIsEditing(true)
  }

  const save = () => {
    if (text.trim() && text !== todo.title) {
      dispatch(updateTodoRequested({ id: todo.id, title: text }))
    }
    setIsEditing(false)
  }

  return (
    <div className={`${styles.todo} ${todo.completed && styles.completedTodo}`} onDoubleClick={startEdit}>
      <BsPencilSquare className={styles.todoIcon} onClick={e => { e.stopPropagation(); startEdit(); }} />

      {isEditing ? (
        <input
          className={styles.editInput}
          value={text}
          autoFocus
          onChange={e => setText(e.target.value)}
          onBlur={save} // сохраняем при потере фокуса
          onKeyDown={e => {
            if (e.key === 'Enter') save() // сохранить Enter
            if (e.key === 'Escape') {      // отмена Esc
              setText(todo.title)
              setIsEditing(false)
            }
          }}
        />
      ) : (
        <div className={styles.todoText}>{todo.title}</div>
      )}
      <RiDeleteBin2Line data-cy="delete-todo" className={styles.deleteIcon} onClick={e => { e.stopPropagation(); dispatch(deleteTodoRequested(todo.id)); }} />
      <FaCheck className={styles.checkIcon} onClick={e => { e.stopPropagation(); dispatch(toggleTodoRequested(todo.id)); }} />
    </div>
  )
}
export default Todo;
