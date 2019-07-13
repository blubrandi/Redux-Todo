import React, { Component } from 'react';

import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';
import { connect } from 'react-redux';
import { addTodo } from './Actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: ''
    }
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTodo = () => {
    const { todoText } = this.state
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    }
    this.props.addTodo(newTodo)
    this.setState({ todoText: ''})
  }

  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <h2>test</h2>
        <Todos todos={this.props.todos} />
        <TodoForm 
        handleChanges={this.handleChanges}
        todoText={this.state.todoText}
        addTodo={this.addTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  };
}

export default connect(mapStateToProps, { addTodo })(App)
