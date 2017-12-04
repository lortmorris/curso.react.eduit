import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';

import reducers from './reducers';
import { AddNewTodosList, ToggleTodosList, RemoveTodosList, EditTodoListName, AddItem} from './actions';

const store = createStore(reducers);
const Title = ({ text }) => (<h1>{text}</h1>);

window.getNextId = ((n = 0) => () => n += 1)();

const TodosList = ({ name, todos, completed, listId }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {todos.map(t => (
        <li key={`t-${window.getNextId()}`}>{t.name}</li>
      ))}
    </ul>
  </div>
);


const App = ({ todoslist }) => {
  console.info('todoslist: ', todoslist);
  return (
    <div>
      <Title text={'My React Super App'} age={32}  dni={'123182389'} />
      {todoslist.map(tl => (
        <TodosList
          name={tl.name}
          todos={tl.todos}
          completed={tl.completed}
          listId={tl.listId}
          key={`tl-${window.getNextId()}`}
        />))}
    </div>
  );
}

const appRender = (state)=> render(<App todoslist={state} />,
document.getElementById('app')
);

appRender([]);

store.subscribe(() => {
  appRender(store.getState());
});


store.dispatch(AddNewTodosList('supermarket'));
store.dispatch(AddNewTodosList('React Lesson'));
store.dispatch(AddNewTodosList('Guitar Hero'));
store.dispatch(ToggleTodosList(store.getState()[0].listId));
store.dispatch(EditTodoListName(store.getState()[0].listId, 'Coto'));
store.dispatch(AddItem(store.getState()[0].listId, 'Comprar red bull'));
// store.dispatch(RemoveTodosList(store.getState()[0].listId));
