import {createStore} from 'redux';

let id = 0;
function todo(state={}, action){
  switch(action.type){
    case 'ADD_TODO':
    return {
      title: action.title,
      status: false,
      id: id++
    };
    break;

    case 'ALTER_TODO':
      if(state.id !== action.id ) return state;
      return Object.assign({}, state, {status: !state.status});
    break;

    case 'REMOVE_TODO':
      return !(state.id === action.id);
    break;
    default:
      return state;
  }
}

function generateTodos(initState=[]){
  return function todos(state=initState, action){
    switch(action.type){
      case 'ADD_TODO':
        return [...state, todo(null, action)];
      break;

      case 'ALTER_TODO':
        return state.map(t=> todo(t, action));
      break;
      case 'REMOVE_TODO':
        return state.filter(t=> todo(t, action));
      break;
      default:
      return state;
    }
  }
}

module.exports = {
  factoryTodos: initState => createStore(generateTodos(initState))
};
