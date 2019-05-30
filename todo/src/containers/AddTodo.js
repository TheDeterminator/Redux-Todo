import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        <input
          ref={node => {
            input = node;
          }}
          placeholder="todo..."
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo); // We use connect() here to get access to the dispatch method
