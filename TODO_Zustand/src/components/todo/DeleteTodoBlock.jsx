import { FcDeleteDatabase, FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import clsx from "clsx";
import Button from '../UI/Button';
import { useTodos } from '../../store';
import { useShallow } from "zustand/react/shallow";


function DeleteTodoBlock() {
  const {deleteCompletedTodos, fetchTodos, resetTodos, todos,} = useTodos(
  useShallow((state) => ({
    deleteCompletedTodos: state.deleteCompletedTodos,
    fetchTodos: state.fetchTodos,
    resetTodos: state.resetTodos,
    todos: state.todos,
  }))
);

const hasCompletedTodos = todos.some(todo => todo.completed); // some() прекращает поиск,
//  как только находит первый подходящий элемент, поэтому он эффективнее, если не нужен 
// сам список выполненных задач.
  
  return (
    <div className="w-full sm:w-[95%] xl:w-[60%] mx-auto flex items-center justify-center space-x-4 mb-4">
      <Button title="Reset Todos" disabled = {!todos.length} onClick={e => { e.stopPropagation(); resetTodos() }}><FcDeleteDatabase /></Button>
      <Button title="Fetch Requested Todos" onClick={e => { e.stopPropagation(); fetchTodos() }}><FcAddDatabase /></Button>
      <Button title="Clear Completed Todos" disabled={!hasCompletedTodos} 
      onClick={e => { e.stopPropagation(); deleteCompletedTodos() }}
      >Delete completed</Button>
    </div>
  )
}
export default DeleteTodoBlock;
