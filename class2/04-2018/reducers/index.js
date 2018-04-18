const initialState = [];

let id = 0;
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        id: id++,
        completed: false,
      }];
    break;
    default:
    return state;
  }
};

module.exports = reducer;
