import { FcDeleteDatabase, FcEmptyTrash, FcAddDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { deleteTodoRequested, resetTodos, fetchRequestedTodos } from '../../store/actions/actions'
import Button from '../UI/Button'


function DeleteTodoBlock({completedTodos, todos}) {
  const dispatch = useDispatch()
  return (
    <>
      <Button title="Reset Todos" disabled = {!todos.length} onClick={e => { e.stopPropagation(); dispatch(resetTodos()); }}><FcDeleteDatabase /></Button>
      <Button title="Fetch Requested Todos" onClick={e => { e.stopPropagation(); dispatch(fetchRequestedTodos()); }}><FcAddDatabase /></Button>
      <Button title="Clear Completed Todos" disabled = {!completedTodos.length} 
      onClick={e => { e.stopPropagation(); dispatch(deleteTodoRequested(completedTodos)); }}>Completed <FcEmptyTrash /></Button>
    </>
    
  )
}
export default DeleteTodoBlock;
