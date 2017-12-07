import { getId  } from '../utils';
import todosItems from './todoitems';

const todosList = (state = { name: '', todos: [] }, action) => {
    switch(action.type) {
      case 'ADD_NEW_TODOS_LIST':
        return {
          name: action.name,
          todos: [],
          completed: false,
          listId: getId(),
        };

      case 'REMOVE_TODOS_LIST':
        return state.listId === action.listId;

      case 'TOGGLE_TODOS_LIST':
        if (state.listId === action.listId ) {
          return Object.assign({}, state, { completed: !state.completed});
        }
        return state;

      case 'EDIT_TODOS_LIST_NAME':
        if (state.listId === action.listId ) {
          return Object.assign({}, state, { name: action.name});
        }
        return state;

      case 'ADD_ITEM':
        if (state.listId === action.listId ) {
          return Object.assign({}, state, { todos: [...state.todos, todosItems(undefined, action) ]});
        }
        return state;

      case 'TOGGLE_ITEM':
      if (state.listId === action.listId ) {
        return Object.assign({}, state, { todos: state.todos.map(t => todosItems(t, action)) });
      }
      return state;

      case 'REMOVE_ITEM':
      if (state.listId === action.listId ) {
        return Object.assign({}, state, { todos: state.todos.filter(t => todosItems(t, action)) });
      }
      return state;
      default:
        return state;

    }
};


export default todosList;
