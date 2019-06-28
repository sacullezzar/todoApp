require('babel-polyfill')
import React, { Component } from 'react';
import Form from './components/Form'
import Todo from './components/Todo'
import About from './components/About'
import './App.css'
const axios = require('axios')

class App extends Component {
    constructor() {
        super()
        this.state = { todos: [] }
        this.getLocation = this.getLocation.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.fetchTodos = this.fetchTodos.bind(this)
    }

    componentDidMount() {
        this.fetchTodos()
    }

    async addTodo(todo) {
        await axios.post('http://localhost:3030/todo/new', {
            todoBody: todo.body,
            todoId: todo.id
        })
        this.fetchTodos()
    }

    completeTodo(todo) {
        let params = { todoId: todo._id }
        axios.post(`http://localhost:3030/todo/complete`, {
            params
        })
    }

    fetchTodos() {
        axios.get('http://localhost:3030/todo/all')
            .then((res) => {
                this.setState({
                    todos: res.data
                })
            })
            .catch((err) => {
                console.log('oops', err)
            })
    }

    getLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                let location = Object.assign({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
                this.setState({
                    location
                })
            })
        }
    }

    render() {
        const { location, todos } = this.state
        return (
        <div className="container">
            <div className="todos">
             <h2 className="title">Todo</h2>
             <Form addTodo={(incoming) => this.addTodo(incoming)} fetchTodos={this.fetchTodos}/>
             <Todo completeTodo={this.completeTodo} todos={todos} fetchTodos={() => this.fetchTodos()}/>
             <h2 className="title">About</h2>
             <About location={location} getLocation={this.getLocation}/>
            </div>
        </div>
        )
    }
}

export default App