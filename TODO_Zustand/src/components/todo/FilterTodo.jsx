import React from 'react'
import Button from '../UI/Button';
import { useFilter } from '../../store';

function FilterTodo() {
    const filter = useFilter((state) => state.filter);
    const setFilter = useFilter((state) => state.setFilter);

  return (
    <div className="w-full sm:w-[95%] xl:w-[60%] mx-auto flex items-center justify-center space-x-4 mb-4">
      <Button title="all" disabled = {filter==='all'} onClick={e=>{e.stopPropagation(); setFilter('all') }}>All</Button>
      <Button title="not completed" disabled = {filter==='uncompleted'} onClick={e=>{e.stopPropagation(); setFilter('uncompleted') }}>Not completed</Button>
      <Button title="completed" disabled = {filter==='completed'} onClick={e => { e.stopPropagation(); setFilter('completed') }}>Completed</Button>
    </div>
  )
}

export default FilterTodo