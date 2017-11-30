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
    break;
    default :
      return state;
    break;
  }
}

export default todosItems;
