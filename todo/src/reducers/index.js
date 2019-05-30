import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actions';

const todoApp = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: state.length + action.id, completed: false, text: action.payload}];
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo;
      });
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};

export default todoApp;
