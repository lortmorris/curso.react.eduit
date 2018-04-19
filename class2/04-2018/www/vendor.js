const Redux = (reducer) => {

  let state = {};
  class Store {
    constructor() {
      state = reducer(undefined, { type: 'INITIAL_STATE' });
      this.cb = () => {};
    }

    dispatch(action) {
      state = reducer(state, action);
      this.cb();
    }

    observe(cb = () => {}) {
      this.cb = cb;
    }

    getState() {
      return state;
    }
  }
  return new Store();
};



const addTodo = title => ({
  type: 'ADD_TODO',
  title,
});

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id,
});

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

const actions = {
  addTodo,
  removeTodo,
  toggleTodo,
};

const initialState = [];

let id = 0;
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        id: id++,
        completed: false,
      }];
    break;
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map((t) => {
        if (t.id === action.id) return { ...t, completed: !t.completed };
        return t;
      });
    default:
    return state;
  }
};


const render = () => {
  const todos  = store.getState();

  const ul = document.getElementById('todosList');
  ul.innerHTML = '';

  ul.innerHTML = todos.map(t => `<li><input type='checkbox' ${t.completed ? 'checked' : ''}/> ${t.title}</li>`).join('');

}


const store = Redux(reducer);
store.observe(render);

store.dispatch(actions.addTodo('task 1'));
store.dispatch(actions.addTodo('task 2'));
store.dispatch(actions.addTodo('task 3'));

store.dispatch(actions.removeTodo(1));
store.dispatch(actions.toggleTodo(0)); // completed
