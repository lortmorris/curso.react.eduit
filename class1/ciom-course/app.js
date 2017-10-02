const Store = require('./store');
const reducer = require('./reducer');
const store = new Store(reducer);
const { addTodo, removeTodo, toggleTodo } = require('./actions');
store.subscribe(() => {
  console.info(store.getState());
});

store.dispatch(addTodo('Aprender redux'));
store.dispatch(addTodo('Aprender react'));
store.dispatch(addTodo('Aprender HOC'));
store.dispatch(removeTodo(1));
store.dispatch(toggleTodo(2));
