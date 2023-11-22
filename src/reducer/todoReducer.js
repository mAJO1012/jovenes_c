export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...initialState, action.payload]

    case 'DELETE_TODO':
      return initialState.filter(todo => todo.userId !== action.payload)

    case 'COMPLETE_TODO':
      return initialState.map(todo => {
        if (todo.userId === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

    case 'UPDATE_TODO':
      return initialState.map(todo => {
        if (todo.userId === action.payload.userId) {
          return {
            ...todo,
            description: action.payload.description
          }
        }
        return todo
      })

    default:
      return initialState
  }
}
