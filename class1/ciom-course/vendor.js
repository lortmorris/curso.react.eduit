function Store(reducer) {
  let state = undefined;
  let cb = () => {};
  let localReducer = reducer;
  return new class {

    dispatch(action = {}){
      state = localReducer(state, action);
      cb();
    }

    getState(){
      return state;
    }

    subscribe(callback){
      cb = callback;
    }
  }
}


let id = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        id: id += 1,
        completed: false,
      }];

    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id === action.id) t.completed = !t.completed;
        return t;
      });
    default:
    return state;
  }
}



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


const store = new Store(reducer);
const todosUI = document.getElementById('todos');

const LI = (t) => {
  const li = document.createElement('li');
  todosUI.appendChild(li);
  li.innerText = t.title;
  li.style.color = t.completed ? 'blue' : 'red';
  li.onclick = ()=> {
    store.dispatch(toggleTodo(t.id))
  }
};

store.subscribe(() => {
  const localState = store.getState();
  todosUI.innerHTML = '';
  localState.map( t => LI(t));
});

store.dispatch(addTodo('Aprender redux'));
store.dispatch(addTodo('Aprender react'));
store.dispatch(addTodo('Aprender HOC'));
store.dispatch(removeTodo(1));
store.dispatch(toggleTodo(2));
