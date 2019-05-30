import React from 'react';
import '../App.css';
// import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, deleteTodo}) => {
    return (
        <li
                onClick={onClick}
                style={{textDecoration: completed ? 'line-through': 'none', color: completed ? 'red': null}}>
                {text}
                <button type="button" 
                onClick={deleteTodo}
                >
                  X
                </button>
              </li>
    )
}

export default Todo;