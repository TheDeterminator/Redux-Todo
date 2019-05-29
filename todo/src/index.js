import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';

const store = createStore(todoApp, [
  {text: 'Become CEO of Google', completed: false, id: 0},
  {text: 'Absorb OpenAI', completed: false, id: 1},
  {text: 'Acquire DeepMind', completed: false, id: 2},
  {text: 'Take over the world', completed: false, id: 3},
]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
