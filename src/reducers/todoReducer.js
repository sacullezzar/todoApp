import constants from '../constants/actionTypes'

var initialState = {
  todo: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {
    case constants.TODO_ADDED:
      updated['todo'] = action.todo
      return updated

    default:
      return state
    }
}