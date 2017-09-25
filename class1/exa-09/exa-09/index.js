const Store = require('./store');
const reducers = require('./reducers');
const actions = require('./actions');

const store = new Store(reducers);
store.observe(()=> console.info(store.getState()));
store.dispatch(actions.AddTodosLists('lista 1'));
store.dispatch(actions.AddTodosLists('lista 2'));
store.dispatch(actions.AddTodosLists('lista 3'));
store.dispatch(actions.AddTodo(1, 'task 1'));
store.dispatch(actions.RemoveTodosLists(2));
