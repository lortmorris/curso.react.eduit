const createStore = require ('redux').createStore;

let counter  = 0;
function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return [...state, {title: action.title, completed: false, id: counter++}];
    break;
  case 'REMOVE_TODO':
    return state.filter( todo=> todo.id!==action.id);
  break;
  default:
    return state
  }
}

let store = createStore(todos);


store.subscribe(() => console.log(store.getState()));


const addTodo = (text)=> ({
  title: text,
  type: 'ADD_TODO'
});

store.dispatch(addTodo('Aprender Redux'));
store.dispatch({ type: 'ADD_TODO', title:' Darle html' });
store.dispatch({ type: 'REMOVE_TODO', id: 1 });
