import { FETCH_TODOS_ERROR, FETCH_TODOS_PENDING, FETCH_TODOS_SUCCESS } from '../constants/actionTypes'

const initialState = {
  pending: true,
  todoArray: [],
  error: null
}


function rootReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TODOS_PENDING:
      return{
        ...state,
        pending: true
      }
    case FETCH_TODOS_SUCCESS:
      return{
        ...state,
        pending: false,
        todoArray: action.todos
      }
    case FETCH_TODOS_ERROR:
      return{
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
export const getTodos = state => state.products;
export const getAllTodosPending = state => state.pending;
export const getAllTodosError = state => state.error;

export default rootReducer