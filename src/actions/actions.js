import actionTypes from '../constants/actionTypes';

function todoAdded(todo){
    return {
        type: actionTypes.TODO_ADDED,
        todo: todo
    }
}
