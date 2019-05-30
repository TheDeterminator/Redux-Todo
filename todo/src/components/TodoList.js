import React from 'react';
import '../App.css';
//import PropTypes from 'prop-types';
import Todo from './Todo';

const Todolist = ({todos, toggleTodo, deleteTodo}) => (
  <div className="TodoList-Container">
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  </div>
);

export default Todolist;
