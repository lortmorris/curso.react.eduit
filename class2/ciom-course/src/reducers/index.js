export default (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {
        title: action.title,
        completed: false,
        added: new Date().toString()
      }];
    default:
      return state;
  }
}
