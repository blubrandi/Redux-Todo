import React, { Component } from 'react';

import TodoForm from './Components/TodoForm'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: ''
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <h2>test</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
