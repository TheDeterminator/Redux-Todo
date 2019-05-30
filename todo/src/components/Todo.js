import React from 'react';
import '../App.css';
// import PropTypes from 'prop-types';

// export default....?
const Todo = ({onClick, completed, text, deleteTodo}) => {
    return (
        <li
                onClick={onClick}
                style={{textDecoration: completed ? 'line-through': 'none', color: completed ? 'red': null}}>
                {text}
                <button type="button" 
                // onClick={() => deleteTodo(todo.id)} need to redefine todo.id
                >
                  X
                </button>
              </li>
    )
}

export default Todo;