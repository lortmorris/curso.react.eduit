import { createStore } from 'redux';
import reducers from './reducers';
import { AddNewTodosList, RemoveTodosList } from './actions';

const store = createStore(reducers);

store.subscribe(() => {
  console.info('changed: ', store.getState());
});

store.dispatch(AddNewTodosList('supermarket'));
store.dispatch(RemoveTodosList(store.getState()[0].listId));
