import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
    super()
  }

  render() {
    const todo = this.props.todos.map((todo) => {
        return (
          <div key={todo._id} className='todoItem'>
            <li>{todo.body}</li>
            <button onClick={(e) => this.props.completeTodo(todo)}>Complete</button>
          </div>
        )
    })
    return (
      <div className="list">
        <h1>Things To Do</h1>
        <React.Fragment>
          <ol>
          {todo}
          </ol>
        </React.Fragment>
      </div>
    )
  }
}

export default Todo