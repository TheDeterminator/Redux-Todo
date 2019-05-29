import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, deleteTodo} from '../actions';

class TodoListContainer extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  addTodoHandler = e => {
    e.preventDefault();
    const text = this.state.todo;
    const newTodo = {
      text,
      completed: false,
      id: this.props.todos ? this.props.todos.length + text : 0 + text,
    };
    this.props.addTodo(newTodo);
    this.setState({todo: ''});
  };

  toggleComplete = todoId => {
    this.props.toggleTodo(todoId);
  };

  deleteTodo = todoId => {
    this.props.deleteTodo(todoId);
  };

  render() {
    return (
      <div className="TodoList-Container">
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li
                onClick={() => this.toggleComplete(todo.id)}
                style={
                  todo.completed
                    ? {color: 'red', textDecoration: 'line-through'}
                    : null
                }
                key={todo.id}>
                {todo.text}
                <button type="button" onClick={() => this.deleteTodo(todo.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.addTodoHandler}>
          <input
            type="text"
            name="todo"
            placeholder="todo..."
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  };
};

export default connect(
  mapStateToProps,
  {addTodo, toggleTodo, deleteTodo},
)(TodoListContainer);
