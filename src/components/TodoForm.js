import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e) {
        this.setState({ value: e.target.value})
    }
    handleSubmit (e) {
        e.preventDefault()
        this.props.addTodo(this.state.value)
        this.setState({ value: '' })
    }

    render() {
      return (
        <div id="todo-form">
          <form onSubmit={this.handleSubmit}>
              <label>Todo:
                <input type="text" id='todo-text' onChange={this.handleChange} value={this.state.value}/>
              </label>
              <input type="submit" id='todo-submit'/>
          </form>
        </div>
      );
    }
  }
  
  export default TodoForm;
  