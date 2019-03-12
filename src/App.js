import React, { Component } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import P5Wrapper from './components//P5Wrapper'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      list: [],
      value: 0,
      slider: 100,
      frameRate: null
    }
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb)

  onSliderChange = (event) => this.setState({ slider: +event.target.value })

  newTodo = (string) => {
    this.setState(prevState => ({
      list: [...this.state.list, string],
      value: prevState.value++
      })
    )
  }

  removeTodo = (index) => {
    const todos = this.state.list.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ list: todos })
  }

  render() {
    const {
      slider,
      value,
      list
    } = this.state
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p className='title'>
              My ToDo App
            </p>
          </header>
          <TodoForm newTodo={this.newTodo}/>
          <TodoList listItems={list} removeTodo={this.removeTodo}/>
        </div>
        <P5Wrapper
          p5Props={{ slider, value }}
          onSetAppState={this.onSetAppState}
        />

        <div style={{ textAlign: 'center' }}>
            <strong>{this.state.slider}</strong>
            <br />
            <input
                type="range"
                min={5} max={290} step={1}
                value={this.state.slider}
                style={{ width: '90%', maxWidth: '900px' }}
                onChange={this.onSliderChange}
            />
        </div>

        <p style={{ textAlign: 'center' }}>
            Sketch frame rate:&nbsp;
            <big><strong>{this.state.frameRate}</strong></big>
            &nbsp;fps
        </p>
      </>
    );
  }
}

export default App;
