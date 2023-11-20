/* import { useEffect, useReducer, localStorage } from 'react'
import { initialState, reducer } from '../../../reducer/ToDo'

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
  }
  const [todos, dispatch] = useReducer(reducer, initialState, init)
  const todosCount = todos.length
  const pendingTodosCount = todos.filter(todos.done).length

  useEffect(() => (
    localStorage.setItem('todos', JSON.stringify(todos))
  ), [todos])

  const handleNewTodo = todo => {
    const action = {
      type: 'ADD_TODO',
      payload: todo
    }
    dispatch(action)
  }
  const handleDeleteTodo = userId => {
    const action = {
      type: 'DELETE_TODO',
      payload: userId
    }
    dispatch(action)
  }
  const handleCompleteTodo = userId => {
    const action = {
      type: 'COMPLETE_TODO',
      payload: userId
    }
    dispatch(action)
  }
  const handleUpdateTodo = (userId, description) => {
    const action = {
      type: 'UPDATE_TODO',
      payload: {
        userId,
        description
      }
    }
    dispatch(action)
  }
  return (
    handleNewTodo, handleDeleteTodo, handleCompleteTodo, handleUpdateTodo, todosCount, pendingTodosCount, todos, dispatch
  )
} */
