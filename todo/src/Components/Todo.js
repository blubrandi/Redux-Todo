import React, { Component } from 'react'
import { connect } from 'react-redux'

const Todo = props => {
    return (
        {this.props.todos.map(todo => (
            <div>
                {todoText}
            </div>
    )
}


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {addTodo, clearTodo}(TodoList))