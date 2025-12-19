
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from './store/rooteReducer.mjs'

import './App.css'

function App() {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(incremented())
  }
  const handleDecrement = () => {
    dispatch(decremented())
  }


  return (
    <>
      <div className="page">
        <div className="counter">
          <span className="counter__value">Counter з react та redux</span>
          <span className="counter__value">{value}</span>
          <div className="counter__buttons">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
