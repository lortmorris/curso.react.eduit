import { createStore } from 'redux';
import reducers from './reducers';
import { AddNewTodosList, ToggleTodosList, RemoveTodosList, EditTodoListName, AddItem} from './actions';

const store = createStore(reducers);

store.subscribe(() => {
  console.info('changed: ', store.getState());
});

store.dispatch(AddNewTodosList('supermarket'));
store.dispatch(ToggleTodosList(store.getState()[0].listId));
store.dispatch(EditTodoListName(store.getState()[0].listId, 'Coto'));
store.dispatch(AddItem(store.getState()[0].listId, 'Comprar red bull'));
store.dispatch(RemoveTodosList(store.getState()[0].listId));
