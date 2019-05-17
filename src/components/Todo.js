import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodos } from '../actions/index'
import { getAllTodosError, getAllTodosPending } from '../reducers/index'

class Todo extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getAllTodos()
  }

  showTodos() {
    console.log(this.props)
    if (this.props.todos && this.props.todoArray.length) {
      this.props.todos.todoArray.map((todo) => {
        return <li key={todo._id}>{todo.body}</li>
      })
    }
  }

  render() {
    const { pending } = this.props.todos
    let todoList = this.showTodos()

    return (
      <div className="list">
        <h1>Things To Do</h1>
        <React.Fragment>
          <ol>
          {!pending && todoList}
          </ol>
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: getAllTodosError(state),
  todos: getAllTodos(state),
  pending: getAllTodosPending(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodos: todos => dispatch(getAllTodos(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)