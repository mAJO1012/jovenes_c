export const initialState = {
  user: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'SIGNUP_USER':
      globalThis.localStorage.setItem('SIGNUP', JSON.stringify(action.payload))
      return { ...state, user: action.payload }
    default:
      return state
  }
}
