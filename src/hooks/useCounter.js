import { useState } from 'react'

const useCounter = (initialState = 0, limit = 5) => {
  const [counter, setCounter] = useState(initialState)

  if (counter <= 0) {
    setCounter(initialState)
  }

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initialState)
  }

  return { counter, increment, decrement, reset }
}

export default useCounter
