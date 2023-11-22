import { createContext, useReducer } from 'react'
import { todoReducer } from '../../../reducer/todoReducer'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [initialState, dispatch] = useReducer(todoReducer)
  return (
    <TaskContext.Provider value={{ initialState, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
