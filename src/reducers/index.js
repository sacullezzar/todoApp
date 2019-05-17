import { ADD_TODO, TODOS_FETCHED } from '../constants/actionTypes'

const initialState = {
  todos: []
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    })
  } else if (action.type === TODOS_FETCHED) {
    return Object.assign({}, state, {
      remoteTodos: state.remoteTodos.concat(action.payload)
    })
  }
  return state
}

export default rootReducer