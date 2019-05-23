import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actions';

const initialList = {
  todos: [
    {text: 'Become CEO of Google', completed: false, id: 0},
    {text: 'Absorb OpenAI', completed: false, id: 1},
    {text: 'Take over the world', completed: false, id: 2},
  ],
};

const todoApp = (state = initialList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });
    case TOGGLE_TODO:
      return state.todos.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, {completed: !todo.completed});
        }
        return todo;
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
