import { FcDeleteDatabase, FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { deleteTodoRequested, resetTodos, fetchRequestedTodos } from '../../store/actions/actions';
import clsx from "clsx";
import Button from '../UI/Button';


function DeleteTodoBlock({completedTodos, todos}) {
  const dispatch = useDispatch()
  return (
    <div className="w-full sm:w-[95%] xl:w-[60%] mx-auto flex items-center justify-center space-x-4 mb-4">
      <Button title="Reset Todos" disabled = {!todos.length} onClick={e => { e.stopPropagation(); dispatch(resetTodos()); }}><FcDeleteDatabase /></Button>
      <Button title="Fetch Requested Todos" onClick={e => { e.stopPropagation(); dispatch(fetchRequestedTodos()); }}><FcAddDatabase /></Button>
      <Button title="Clear Completed Todos" disabled = {!completedTodos.length} 
      onClick={e => { e.stopPropagation(); dispatch(deleteTodoRequested(completedTodos)); }}
      >Delete completed</Button>
    </div>
  )
}
export default DeleteTodoBlock;
