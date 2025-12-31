import { FcDeleteDatabase, FcEmptyTrash } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { deleteTodoRequested } from '../../store/actions/actions'
import Button from '../UI/Button'


function DeleteTodoBlock({completedTodos}) {
  const dispatch = useDispatch()

  
  return (
    <>
      <Button title="Reset Todos"><FcDeleteDatabase /></Button>
      <Button title="Clear Completed Todos" disabled = {!completedTodos.length} 
      onClick={e => { e.stopPropagation(); dispatch(deleteTodoRequested(completedTodos)); }}>Completed <FcEmptyTrash /></Button>
    </>
    
  )
}
export default DeleteTodoBlock;
