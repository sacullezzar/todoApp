import React from 'react';
import Form from './components/Form'
import Todo from './components/Todo'
import About from './components/About'

const App = () => {
    return (
    <div className="container">
        <div className="todos">
         <h2 className="title">Todo</h2>
         <Form />
         <Todo />
         <h2 className="title">About</h2>
         <About />
        </div>
    </div>
    )
}

export default App