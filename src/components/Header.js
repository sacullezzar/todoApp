import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { message } = this.props
        return (
            <h1>{message}</h1>
        )
    }
}

export default Header