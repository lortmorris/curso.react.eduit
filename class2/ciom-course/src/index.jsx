import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';

import reducers from './reducers';
import { addTodo, removeTodo, toggleTodo } from './actions';

const store = createStore(reducers);


window.store = store;
window.actions = {
  addTodo,
  removeTodo,
  toggleTodo
};


const App = () => (
  <div>
      <h1>Soy react</h1>
  </div>
);

const appRender = ()=> render( <App />, document.getElementById('app') );

appRender();

store.subscribe( ()=> appRender());
