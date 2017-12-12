import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';

import reducers from './reducers';
import { AddNewTodosList,
  ToggleTodosList,
  RemoveTodosList,
  EditTodoListName,
  AddItem,
  ToggleItem
} from './actions';

import TodosList from './components/TodosList/index.jsx';
import AddForm from './components/AddForm/index.jsx';
import ApiClient from './api/client';

const store = createStore(reducers);
const Title = ({ text }) => (<h1>{text}</h1>);

window.getNextId = ((n = 0) => () => n += 1)();

const App = ({ todoslist, dispatch }) => (
  <div className={'row'}>
    <Title text={'TodosApp v1.0'} />
    <AddForm title={'Add Todos List'} dispatch={dispatch} />
    {todoslist.map(tl => (
      <TodosList
        name={tl.name}
        todos={tl.todos}
        completed={tl.completed}
        listId={tl.listId}
        key={`tl-${window.getNextId()}`}
        dispatch={dispatch}
      />)
    )}
  </div>
);

ApiClient({
  method: 'get',
  url: 'http://localhost:5000/state',
})
.then(response => {
  store.dispatch({ type: 'INIT_LOAD', data: response.data });
  appRender(response.data);
});



const appRender = (state)=> render(<App todoslist={state} dispatch={store.dispatch} />,
document.getElementById('app')
);



store.subscribe(() => {
  ApiClient({
    method: 'put',
    url: 'http://localhost:5000/state',
    params: store.getState(),
  });
  appRender(store.getState());
});

window.store = store;
window.ToggleTodosList = ToggleTodosList;
