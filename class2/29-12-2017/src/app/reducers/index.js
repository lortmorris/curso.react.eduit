const getId = () => `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;

const todosList = (state = { name: '', todos: [] }, action) => {
  console.info('todosList: ', action);
    switch(action.type) {
      case 'ADD_NEW_TODOS_LIST':
        return {
          name: action.name,
          todos: [],
          completed: false,
          listId: getId(),
        };
      break;
      default:
        return state;
      break;
    }
};

const reducer = (state = [], action) => {
  console.info(action);
  switch(action.type) {
    case 'ADD_NEW_TODOS_LIST':
      return [...state, todosList(undefined, action) ];
      break;
    case 'REMOVE_TODOS_LIST':
      return state.filter(tl => tl.listId !== action.listId );
      break;
    default:
      return state;
    break;
  }
};

export default reducer;
