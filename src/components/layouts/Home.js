import React, {Component} from 'react'
import Todo from '../containers/Todo'

class Home extends Component {
    render() {
        return (
            <div className="container">
            <div>Welcome to My Todo App!</div>
            <div><Todo /></div>
            </div>
        )
    }
}

export default Home;
