import { createStore } from 'redux';

const initialState = {
  todosList : []
};

let id = 0;

const todo = (state ={}, action) => {
    switch(action.type){
      case 'ADD_TODO':
      return {
        id: id++,
        added: action.added,
        title: action.title,
        completed: false,
      };

      case 'REMOVE_TODO':
        return state.id !== action.id;

      case 'TOGGLE_TODO':
        if (state.id === action.id) return Object.assign({}, state, {completed: !state.completed});
        else return state;
      default:
      return state;
    }
}

const todosList = (state = {}, action) => {
  switch(action.type){
    case 'ADD_TODO':
      if (state.id === action.listId) {
        return Object.assign({}, state, {
          todos: [...state.todos, todo({}, action)]
        });
      }else return state;

      case 'REMOVE_TODO':
        if (state.id === action.listId) {
          return Object.assign({}, state, {
            todos: state.todos.filter( t=> todo(t, action))
          });
        }else return state;

      case 'TOGGLE_TODO':
        if (state.id === action.listId) {
          return Object.assign({}, state, {
            todos: state.todos.map( t=> todo(t, action))
          });
        }else return state;

    case 'CREATE_TODO_LIST':
    return {
      name: action.name,
      added: action.added,
      completed: false,
      todos: [],
      id: id++,
    }
    case 'REMOVE_TODO_LIST':
      return state.id !== action.id;

    case 'TOGGLE_TODOS_LIST':
      if (state.id === action.id){
        return Object.assign({}, state, {
          todos: state.todos.map(t => Object.assign({}, t, {completed: !state.completed})),
          completed: !state.completed,
        });
      }else return state;
    default:
    return state;
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'CREATE_TODO_LIST':
      return Object.assign({}, state, {
        todosList: [...state.todosList, todosList({}, action)]
      });
    case 'REMOVE_TODO_LIST':
      return Object.assign({}, state, {
        todosList: state.todosList.filter(tl => todosList(tl, action))
      });

    case 'TOGGLE_TODOS_LIST':
      return Object.assign({}, state, {
        todosList: state.todosList.map(tl => todosList(tl, action)),
      });
    case 'ADD_TODO':
      return Object.assign(state, {
        todosList: state.todosList.map(tl => todosList(tl, action))
      });

    case 'REMOVE_TODO':
      return Object.assign(state, {
        todosList: state.todosList.map(tl => todosList(tl, action))
      });

      case 'TOGGLE_TODO':
        return Object.assign(state, {
          todosList: state.todosList.map(tl => todosList(tl, action))
        });

    default:
    return state;
  }
}

export const store = createStore( reducer );
