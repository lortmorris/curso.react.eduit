import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import MyHeader from './components/MyHeader.jsx';
import TodosList from './components/TodosList.jsx';
const App = ({ state }) => {
  console.info('state: ', state);
  return (
    <div>
      <MyHeader />
      <TodosList todoslist={state.todoslist}/>
    </div>
  );
}

const localstate = {
  todoslist: [{
    title: 'My List 1',
    todos: [{
      title: 'my task 1',
      completed: false,
      id: 0,
    }],
    id: 0,
  }],
};

const appRender = () => render(<App state={localstate} />, document.getElementById('app'));

appRender();
