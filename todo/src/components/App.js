import React from 'react';
import '../App.css';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

const App = () => (
      <div className="App">
        <VisibleTodoList />
        <AddTodo />
      </div>
)

export default App;
