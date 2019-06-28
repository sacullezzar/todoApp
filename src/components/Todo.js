import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
    super()
    this.refreshList = this.refreshList.bind(this)
  }

  refreshList() {
    this.props.fetchTodos()
  }

  render() {
    const todo = this.props.todos.map((todo) => {
      if (!todo.completed){
        return (
          <div key={todo._id} className='todoItem'>
            <li>{todo.body}</li>
            <button onClick={() => this.props.completeTodo(todo, this.refreshList)}>Complete</button>
          </div>
        )
      } else {
        return null
      }
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