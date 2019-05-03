import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItemListing extends Component {
    render () {
        return (
            <div className='container'>
                <div className="todoItem">{this.props.data.body}</div>
            </div>
        )
    }
}

TodoItemListing.propTypes = {
    data: PropTypes.shape({
        body: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })
};

export default TodoItemListing