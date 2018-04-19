const Redux = require('./redux');
const reducer = require('./reducers');
const actions = require('./actions');

const render = () => {
  const todos  = store.getState();
  console.info('\033c');
  todos.forEach(t => console.info(`${t.completed ? '[*]' : '[ ]'} ${t.title}`));
}


const store = Redux(reducer);
store.observe(render);

store.dispatch(actions.addTodo('task 1'));
store.dispatch(actions.addTodo('task 2'));
store.dispatch(actions.addTodo('task 3'));

store.dispatch(actions.removeTodo(1));
store.dispatch(actions.toggleTodo(0)); // completed

/*


*/
