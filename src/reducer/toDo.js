/* export const initialState = {
  user: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, user: action.payload }
    case 'DELETE_TODO':
      return { ...state.filter(todo => todo.id !== action.payload) }
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }

        return todo
      })
    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description
          }
        }

        return todo
      })
    default:
      return state
  }
} */
