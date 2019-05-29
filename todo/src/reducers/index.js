import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actions';

const todos = [
  {text: 'Become CEO of Google', completed: false, id: 0},
  {text: 'Absorb OpenAI', completed: false, id: 1},
  {text: 'Take over the world', completed: false, id: 2},
];
const todoApp = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo => {
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo;
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload;
        }),
      });
    default:
      return state;
  }
};

export default todoApp;
