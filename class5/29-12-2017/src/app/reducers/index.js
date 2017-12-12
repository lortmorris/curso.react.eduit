import todosList from './todosList';

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_NEW_TODOS_LIST':
      return [...state, todosList(undefined, action) ];

    case 'REMOVE_TODOS_LIST':
      return state.filter(tl => !todosList(tl, action) );

    case 'TOGGLE_TODOS_LIST':
      return state.map(tl => todosList(tl, action));

    case 'EDIT_TODOS_LIST_NAME':
      return state.map(tl => todosList(tl, action));

    case 'ADD_ITEM':
      return state.map(tl => todosList(tl, action));

    case 'TOGGLE_ITEM':
      return state.map(tl => todosList(tl, action));

    case 'REMOVE_ITEM':
      return state.map(tl => todosList(tl, action));

    case 'INIT_LOAD':
      return action.data;

    default:
      return state;

  }
};

export default reducer;
