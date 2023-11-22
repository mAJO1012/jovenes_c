export const initialState = {
  tasks: [],
  currentTask: null
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]

    case 'DELETE_TODO':
      return state.filter(todo => todo.userid !== action.payload)

    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.userid === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })

    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.userid === action.payload.userid) {
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
}
