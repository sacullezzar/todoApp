import React, {Component} from 'react'
import TodoItemListing from '../presentation/TodoItemListing'
import { connect } from  'react-redux'

class Todo extends Component {
    render() {
        const todoItems = this.props.todo.map((todo, i) => {
            return (<li key={i}><TodoItemListing data={todo} /></li>)
        })
        return ( 
            <div className="container">
                <ul className="todoList">
                    {todoItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

export default Todo;
