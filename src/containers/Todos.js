import React, { Component } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }

    addTodo (string) {
        this.setState({ todos: [...this.state.todos, string] })
    }

    removeTodo (index) {
        const todos = this.state.todos.filter((todo, todoIndex) => {
          return todoIndex !== index
        })
        this.setState({ todos: todos })
      }

    render () {
        const { todos } = this.state
        return (
            <div className='container'>
            <TodoForm addTodo={this.addTodo}/>
            <TodoList todos={todos} removeTodo={this.removeTodo}/>
            </div>
        )
    }
}

export default Todos