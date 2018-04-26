
const initialState = {
  todoslist: [],
};

const getId = () => `${new Date().getTime()}`;

const todo = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        title: action.title,
        id: getId(),
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
        id: getId(),
        title: action.title,
        todos: [],
      };
    case 'REMOVE_TODO_LIST':
      return state.id !== action.listId;

    case 'REMOVE_TODO':
      return Object.assign({}, state, { todos: state.todos.filter(t => todo(t, action)) });

    case 'TOGGLE_TODO':
      if (state.id === action.listId) {
        return Object.assign({}, state, { todos: state.todos.map(t => todo(t, action)) });
      }
      return state;
    case 'ADD_TODO':
      if (state.id === action.listId) {
        return Object.assign({}, state, { todos: [...state.todos, todo(undefined, action)] });
      }
      return state;
  }
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO_LIST':
      return Object.assign({}, state, { todoslist: [...state.todoslist, todoList(undefined, action)] });

    case 'REMOVE_TODO_LIST':
      return Object.assign({}, state, { todoslist: state.todoslist.filter(tl => todoList(tl, action)) });

    case 'ADD_TODO':
      return Object.assign({}, state, { todoslist: state.todoslist.map(tl => todoList(tl, action)) });
    break;

    case 'REMOVE_TODO':
      return Object.assign({}, state, { todoslist: state.todoslist.map(tl => todoList(tl, action)) });

    case 'TOGGLE_TODO':
      return Object.assign({}, state, { todoslist: state.todoslist.map(tl => todoList(tl, action)) });
    case 'SET_INITIAL_STATE':
      return Object.assign({}, action.state);
    default:
    return state;
  }
};

export default reducer;
