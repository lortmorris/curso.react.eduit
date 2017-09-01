import React from 'react';
import { render } from 'react-dom';

import { store } from './reducers';
import { createTodoList, removeTodoList, toggleList, addTodo, removeTodo, toggleTodo } from './actions';

import Header from './containers/Header/index.jsx';
import TodosLists from './containers/TodosLists/index.jsx';

const App = ({ localstore }) => (
  <div>
    <Header dispatch={localstore.dispatch}/>
    <TodosLists
      dispatch={localstore.dispatch}
      state={localstore.getState().todosList}
    />
  </div>
);

const appRender = store => render(<App localstore={store} />,
document.getElementById('app')
);
appRender(store);

store.subscribe(()=> {
  appRender(store);
});
