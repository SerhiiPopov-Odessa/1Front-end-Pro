import { useRef, useState } from "react";
import { useTodos } from "../../store";

import { RiDeleteBin2Line } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";
import clsx from "clsx";

function Todo({ todo } /* {id, title, completed} */) {
  const toggleTodo = useTodos((state) => state.toggleTodo);
  const deleteTodo = useTodos((state) => state.deleteTodo);
  const editTodo = useTodos((state) => state.editTodo);
  const cancelBlur = useRef(false); // при изменении useRef перерендера не происходит
  /* Используй useRef, если нужно просто хранить значение между рендерами.
     Например:
    ссылка на DOM-элемент;
    таймер (setTimeout, setInterval);
    предыдущие значения;
    флаги вроде cancelBlur;
    счётчики, которые не отображаются в интерфейсе. */

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const startEdit = () => {
    setText(todo.title);
    setIsEditing(true);
  };

  const save = () => {
    if (cancelBlur.current) {
      cancelBlur.current = false;
      return;
    }

    const newTitle = text.trim();
    if (newTitle && newTitle !== todo.title) {
      editTodo(todo.id, newTitle);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      save();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    // вызывается при "Escape" отмене
    cancelBlur.current = true; // флаг чтобы save() два раза неотробатовала, при потери фокуса с input
    setText(todo.title); // оставляем старый текст
    setIsEditing(false); // теряем фокус с input
  };

  return (
    <div
      className={`${clsx("w-full sm:w-[95%] xl:w-[60%]", styles.todo)} ${todo.completed && styles.completedTodo}`}
      onDoubleClick={startEdit}
    >
      <BsPencilSquare
        className={styles.todoIcon}
        onClick={(e) => {
          e.stopPropagation();
          startEdit();
        }}
      />

      {isEditing ? (
        <input
          className={styles.editInput}
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onBlur={save} // сохраняем при потере фокуса
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div className={styles.todoText}>{todo.title}</div>
      )}
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo(todo.id);
        }}
      />
    </div>
  );
}
export default Todo;
