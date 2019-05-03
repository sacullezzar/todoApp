import React, { Component } from 'react'
import Todos from './Todos'
import Header from '../components/Header'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'My Todo App'
        }
    }

    render () {
        const { message } = this.state
        return (
            <div className='container'>
            <Header message={message} />
            <Todos />
            </div>
        )
    }
}

export default App