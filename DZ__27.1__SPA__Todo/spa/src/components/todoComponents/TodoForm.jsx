import { useState } from "react"
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSabmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.todoFormContainer}>
      <form className="" onSubmit={onSabmitHandler}>
        <input placeholder="Enter new todo" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="">Send</button>
      </form>
    </div>
  )
}
export default TodoForm;