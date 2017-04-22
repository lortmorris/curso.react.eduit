import { createStore } from 'redux';
import Request from '../lib/request.jsx';


const Store =  createStore(todosList);
const request = new Request(Store);

let todosId = 0;
let todoId = 0 ;

const todo = (state={}, action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return {
          todoId: todoId++,
          title: action.title,
          completed: false,
          owner: action.owner || 0,
          asigne: action.asigne || 0,
          timer: 0,
      };
    break;
    default:
    return state;
  }
}

const todos = (state=[], action)=>{

  switch(action.type){
    case 'ADD_TODOS_LIST':
      return {
        title: action.title,
        todos: [],
        completed: false,
        todosId: todosId++
      };
      break;
    case 'ADD_TODO':
      return [...state, todo(null, action)];
    break;
    default:

    return state;
  }
}

function todosList (state=[], action){
  console.log('State changed: ', state, action);
  switch(action.type){
    case 'ADD_TODOS_LIST':

      return [...state, todos(null, action)];
      break;
    case 'INIT_APP':
      request.get('http://localhost:8000/todo');
      return [...state];
    break;

    case 'REQUEST_SUCCESS':
      return action.data.todos.map(todos=>  Object.assign({}, todos, {todos: [] })) ;
    break;
    case 'ADD_TODO':
      return state.map(todoslist =>{
        if(todoslist.todosId === action.todosId){
            return Object.assign({}, todoslist, {todos: todos(todoslist.todos, action)});
        }
        else return todoslist;

      });
    break;
    return state;
    default:
    return state;
  }
}



export default Store;
