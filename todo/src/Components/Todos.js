import React from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../Actions'

const style = { color: '#d6d6d6' }
const Todos = props => {
    return (
      <div>
        {props.todos.map(todo => (
          <li
            style={todo.completed ? style : null}
            onClick={() => props.completeTodo(todo.id)}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </div>
    );
  };

  export default connect(null, { completeTodo })(Todos);
