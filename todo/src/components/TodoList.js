import React from 'react';
import '../App.css';
//import PropTypes from 'prop-types';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, deleteTodo} from '../actions';

const Todolist = ({todos, toggleTodo, deleteTodo}) => (
    // return (
      <div className="TodoList-Container">
        <ul>
          {console.log('todos', todos)}
          {todos.map(todo => (
            // return (
            <Todo key={todo.id} {...todo} onClick={toggleTodo} deleteTodo={deleteTodo} />  
            // );
          ))}
        </ul>
      </div>
    // );
)

// const mapStateToProps = state => {
//   return {
//     todos: state,
//   };
// };

// export default connect(
//   mapStateToProps,
//   {addTodo, toggleTodo, deleteTodo},
// )(TodoListContainer);

export default Todolist