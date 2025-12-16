import { useState } from 'react'
import AppTodo from './todoComponents/AppTodo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppTodo />
    </>
  )
}

export default App
