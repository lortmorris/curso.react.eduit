import { getId } from '../utils';

const todosItems = (state = {}, action ) => {
  switch(action.type){
    case 'ADD_ITEM':
      return {
        name: action.name,
        listId: action.listId,
        completed: false,
        id: getId(),
      }

    case 'TOGGLE_ITEM':
      if (state.id === action.itemId) return Object.assign({}, state, {completed: !state.completed} );
      return state;

    case 'REMOVE_ITEM':
      return state.id !== action.itemId;

    default :
      return state;

  }
}

export default todosItems;
