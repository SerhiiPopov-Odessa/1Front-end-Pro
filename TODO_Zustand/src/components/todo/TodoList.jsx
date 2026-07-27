import clsx from "clsx";
import { useTodos } from "../../store";
import { useFilter } from "../../store";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
function TodoList(/* {todos} */) {
  const filter = useFilter((state) => state.filter);
  const todos = useTodos((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed;
      case "uncompleted":
        return !todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className={clsx("mb-4 ", styles.todoListContainer)}>
      {/* !filteredTodos.length */ filteredTodos.length === 0 && <h3>Todo list is empty</h3>}
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} /* {...todo} *//>
      ))}
    </div>
  );
}
export default TodoList;
