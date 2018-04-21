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


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
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
