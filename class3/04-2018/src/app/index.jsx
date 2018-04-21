import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { addTodo, removeTodo, toggleTodo, addTodosList } from './actions';
import MyHeader from './components/MyHeader.jsx';
import TodosList from './components/TodosList.jsx';

const store = createStore(reducer);

const App = ({ state }) => (
  <div>
    <MyHeader />
    <TodosList todoslist={state.todoslist}/>
  </div>
);


const appRender = () => render(<App state={store.getState()} />, document.getElementById('app'));

store.subscribe(appRender);

store.dispatch(addTodosList('lista de tareas 1'));
store.dispatch(addTodo(0, 'task 1'));
store.dispatch(addTodo(0, 'task 2'));
store.dispatch(addTodo(0, 'task 3'));
store.dispatch(toggleTodo(0, 1)); // completed

store.dispatch(addTodosList('Lista de tareas 2'));
store.dispatch(addTodo(1, 'Para hace 1'));
store.dispatch(addTodo(1, 'Para hace 2'));
store.dispatch(addTodo(1, 'Para hace 3'));
store.dispatch(toggleTodo(1, 2)); // completed

appRender();
