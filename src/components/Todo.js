import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { todos: state.todos }
}

const ConnectedList = ({ todos }) => (
  <ul className="list-group list-group-flush">
    {todos.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title} <button onClick={remove}>Remove</button>
      </li>
    ))}
  </ul>
)
const List = connect(mapStateToProps)(ConnectedList)
export default List