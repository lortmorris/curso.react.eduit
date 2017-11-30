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
      break;
      case 'REMOVE_TODOS_LIST':
        return state.listId === action.listId;
      break;

      case 'TOGGLE_TODOS_LIST':
        if (state.listId === action.listId ) {
          return Object.assign({}, state, { completed: !state.completed});
        }
        return state;
        break;

      case 'EDIT_TODOS_LIST_NAME':
        if (state.listId === action.listId ) {
          return Object.assign({}, state, { name: action.name});
        }
        return state;
       break;

      case 'ADD_ITEM':
        if (state.listId === action.listId ) {
          return Object.assign({}, state, { todos: [...state.todos, todosItems(undefined, action) ]});
        }
        return state;
      break;
      default:
        return state;
      break;
    }
};


export default todosList;
