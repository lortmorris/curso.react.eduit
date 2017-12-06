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

const store = createStore(reducers);
const Title = ({ text }) => (<h1>{text}</h1>);

window.getNextId = ((n = 0) => () => n += 1)();

const App = ({ todoslist }) => (
  <div className={'row'}>
    <Title text={'TodosApp v1.0'} />
    <AddForm title={'Add Todos List'} />
    {todoslist.map(tl => (
      <TodosList
        name={tl.name}
        todos={tl.todos}
        completed={tl.completed}
        listId={tl.listId}
        key={`tl-${window.getNextId()}`}
      />)
    )}
  </div>
);


const appRender = (state)=> render(<App todoslist={state} />,
document.getElementById('app')
);

appRender([]);

store.subscribe(() => {
  appRender(store.getState());
});

window.store = store;
window.ToggleTodosList = ToggleTodosList;
store.dispatch(AddNewTodosList('supermarket'));
store.dispatch(AddNewTodosList('React Lesson'));
store.dispatch(AddNewTodosList('Guitar Hero'));
store.dispatch(ToggleTodosList(store.getState()[0].listId));
store.dispatch(EditTodoListName(store.getState()[0].listId, 'Coto'));
store.dispatch(AddItem(store.getState()[0].listId, 'Comprar red bull'));
store.dispatch(AddItem(store.getState()[0].listId, 'Comprar Pizza'));
store.dispatch(AddItem(store.getState()[0].listId, 'Comprar Milanesas'));
store.dispatch(ToggleItem(store.getState()[0].listId, store.getState()[0].todos[0].id));
// store.dispatch(RemoveTodosList(store.getState()[0].listId));
