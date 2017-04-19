import React from 'react';
import { render } from 'react-dom';
import Reducers from './reducers';
import { createStore } from 'redux';
import Layout from './containers/layout.jsx';
const Store =  createStore(Reducers);

const todos=[
  {title: 'Todo 1', timer:0, owner:0, asigne: 0, completed: false, id:0 },
  {title: 'Todo 2', timer:0, owner:0, asigne: 0, completed: false, id:1 },
  {title: 'Todo 3', timer:0, owner:0, asigne: 0, completed: false, id:2 },
];

const todosList = [
  {title: 'Lista 1', todos},
  {title: 'Lista 2', todos}
];

const App = ({store})=> (
  <Layout store={store} title='Todos App' />
)

const appRender = store => {
  render(<App store={store} />, document.getElementById('app'));
}

Store.subscribe(()=> {
  console.log('State changed: ', Store.getState());
  appRender(Store);
});

todosList.map( tl => Store.dispatch({type:'ADD_TODOS_LIST', title: tl.title}))
todos.map( t => {
  Store.dispatch({type:'ADD_TODO', title: t.title, todosId: 0});
  Store.dispatch({type:'ADD_TODO', title: t.title, todosId: 1});
});
