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

store.dispatch(actions.addTodosList('lista de tareas 1'));
store.dispatch(actions.addTodo(0, 'task 1'));
store.dispatch(actions.addTodo(0, 'task 2'));
store.dispatch(actions.addTodo(0, 'task 3'));
store.dispatch(actions.toggleTodo(0, 1)); // completed

store.dispatch(actions.addTodosList('Lista de tareas 2'));
store.dispatch(actions.addTodo(1, 'Para hace 1'));
store.dispatch(actions.addTodo(1, 'Para hace 2'));
store.dispatch(actions.addTodo(1, 'Para hace 3'));
store.dispatch(actions.toggleTodo(1, 2)); // completed

/*

state = {
 todoslists: [
  {
  id: 0
  title: 'todos title',
  todos: [ { title: '', id: 0, completed: false } ],
  }
 ]
}
*/

/*
lista de tareas 1:
  - [ ] Task 1
  - [*] Task 2
  - [ ] Task 3

lista de tareas 2:
  - [ ] Para hace 1
  - [ ] Para hace 2
  - [*] Para hace 3

*/
