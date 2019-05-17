import { ADD_TODO, FETCH_TODOS_PENDING, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from '../constants/actionTypes'
import axios from 'axios'

export function addTodo (payload) {
    return function(dispatch) {
        return axios.post("http://localhost:3030/api/addTodo", {
            id: payload.id,
            body: payload.body
        })
            .then(res => {
                dispatch(createTodoSuccess(res.data))
            })
            .catch(err => {
                throw(err)
            })
    }
}

export const createTodoSuccess = (data => {
    return {
        type: ADD_TODO,
        payload: {
            id: data.id,
            body: data.body
        }
    }
})

function fetchAllTodosPending() {
    return {
        type: FETCH_TODOS_PENDING
    }
}

function fetchAllTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        todos: todos
    }
}

function fetchAllTodosError(error) {
    return {
        type: FETCH_TODOS_ERROR,
        error: error
    }
}

export function getAllTodos() {
    return dispatch => {
        dispatch(fetchAllTodosPending());
        fetch("http://localhost:3030/api/getTodos")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchAllTodosSuccess(res))
        })
        .catch(error => {
            dispatch(fetchAllTodosError(error));
        })
    }
}

export default getAllTodos;