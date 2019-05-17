import { ADD_TODO, TODOS_FETCHED } from '../constants/actionTypes'
import axios from 'axios'

export function addTodo (payload) {
    return function(dispatch) {
        return axios.post("http://localhost:3030/api/addTodo", {
            id: payload.id,
            title: payload.title
        })
    }
}

export function getTodos() {
    return function(dispatch) {
        return fetch('http://localhost:3030/api/getTodos')
            .then(res => res.json())
            .then(todos => {
                return { type: TODOS_FETCHED, payload: todos}
            })
    }
}