import todosList from './todosList';

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_TODOS_LIST':
      return [...state, todosList(undefined, action) ];
      break;
    case 'REMOVE_TODOS_LIST':
      return state.filter(tl => !todosList(tl, action) );
      break;
    case 'TOGGLE_TODOS_LIST':
      return state.map(tl => todosList(tl, action));
      break;
    case 'EDIT_TODOS_LIST_NAME':
      return state.map(tl => todosList(tl, action));
      break;
    case 'ADD_ITEM':
      return state.map(tl => todosList(tl, action));
      break;
    default:
      return state;
    break;
  }
};

export default reducer;
