const initialState = {
  todoslist: [],
};

let id = 0;

const todo = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        title: action.title,
        id: id++,
        completed: false,
      };
    break;
    case 'REMOVE_TODO':
      return state.id !== action.id;

    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
      return Object.assign({}, state, {completed: !state.completed });
      break;
    default:
    return state;
  }
}

const todoList = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO_LIST':
      return {
        id: id++,
        title: action.title,
        todos: [],
      };
    case 'ADD_TODO':
      if (state.id === action.listId) {
        return Object.assign({}, state, { todos: [...state.todos, todo(undefined, action)] });
      }
      return state;
  }
}

const reducer = (state = initialState, action) => {
  console.info('reducer called: ', state, action);
  switch(action.type) {
    case 'ADD_TODO_LIST':
      return Object.assign({}, state, { todoslist: [...state.todoslist, todoList(undefined, action)] });

    case 'ADD_TODO':
      return Object.assign({}, state, { todoslist: state.todoslist.map(tl => todoList(tl, action)) });
    break;
    case 'REMOVE_TODO':
      return state.filter(t => todo(t, action));

    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action));
    default:
    return state;
  }
};

export default reducer;
