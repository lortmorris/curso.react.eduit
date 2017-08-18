import { store } from './reducers';
import { createTodoList, removeTodoList, toggleList, addTodo, removeTodo, toggleTodo } from './actions';

store.subscribe(()=> console.info(store.getState()));
store.dispatch( createTodoList('my first list') );
store.dispatch( createTodoList('my second list') );
store.dispatch( removeTodoList(0) );
store.dispatch( toggleList(1) );
store.dispatch( toggleList(1) );
store.dispatch( addTodo(1, 'My first Todo') );
store.dispatch( addTodo(1, 'My second Todo') );
store.dispatch( removeTodo(1, 2) );
store.dispatch( toggleTodo(1, 3) );
