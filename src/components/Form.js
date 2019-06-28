import React, { Component } from 'react'
import uuidv1 from 'uuid'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            body: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const { body } = this.state
        const id = uuidv1()
        this.props.addTodo({ body, id })
        this.setState({ body: '' })
    }

    render() {
        const { body } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form">
                    <label htmlFor="title">Todo</label>
                    <input 
                        type="text"
                        className='formControl'
                        id='body'
                        value={body}
                        onChange={this.handleChange}
                    />
                </div>
                <button type='submit' className="submit">
                    Save
                </button>
            </form>
        )
    }
}

export default Form