import React from 'react'
import { useTodos } from '../../store'


function TotalTodos() {
    const count = useTodos((state) => state.todos.length)
  return (
    <div className="font-bold" >TotalTodos: {count}</div>
  )
}

export default TotalTodos