let id = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        id: id += 1,
        completed: false,
      }];

    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id === action.id) t.completed = !t.completed;
        return t;
      });
    default:
    return state;
  }
}

module.exports = reducer;
