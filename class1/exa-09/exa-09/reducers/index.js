let id = 0;
const reducer = (state = { todosLists: [] }, action) =>{
  switch(action.type){
    case 'ADD_NEW_TODOSLISTS':
      return Object.assign({}, state, { todosLists: [...state.todosLists, {
        title: action.title,
        id: id += 1,
        completed: false,
        todos: [],
      }]});

    case 'REMOVE_TODOSLISTS':
      return  Object.assign({}, state, {
        todosLists: state.todosLists.filter(tl => tl.id !== action.id)
      });

    case 'ADD_TODO':
      return Object.assign({}, state, {
        todosLists: state.todosLists.map(tl => {
            if (tl.id === action.listId) {
              return Object.assign({}, tl, {
               todos: [...tl.todos, {
                 id: id += 1,
                 title: action.title,
                 completed: false
               }],
             });
           }

          return Object.assign({}, tl, {
            todos: [...tl.todos],
          });
        })
      });
    default:
    return state;
  }
}

module.exports = reducer;
