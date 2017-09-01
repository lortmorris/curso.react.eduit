import { createStore } from 'redux';

const initialState = {
  todosList : []
};

let id = 0;

const todo = (state ={}, action) => {
    switch(action.type){
      case 'PUT_TODOS_SUCCESS':
      return {
        _id: action.payload._id,
        added: action.payload.added,
        title: action.payload.title,
        completed: false,
      };

      case 'REMOVE_TODO':
        return state._id !== action._id;

      case 'TOGGLE_TODO':
        if (state._id === action._id) return Object.assign({}, state, {completed: !state.completed});
        else return state;
      default:
      return state;
    }
}

const todosList = (state = {}, action) => {
  switch(action.type){
    case 'PUT_TODOS_SUCCESS':
      if (state._id === action.payload.listId) {
        return Object.assign({}, state, {
          todos: [...state.todos, todo({}, action)]
        });
      }else return state;

      case 'REMOVE_TODO':
        if (state._id === action.listId) {
          return Object.assign({}, state, {
            todos: state.todos.filter( t=> todo(t, action))
          });
        }else return state;

      case 'TOGGLE_TODO':
        if (state._id === action.listId) {
          return Object.assign({}, state, {
            todos: state.todos.map( t=> todo(t, action))
          });
        }else return state;

    case 'PUT_TODOLIST_SUCCESS':
    return {
      name: action.payload.name,
      added: action.payload.added,
      completed: false,
      todos: [],
      _id: action.payload._id,
    }
    case 'REMOVE_TODO_LIST':
      return state._id !== action._id;

    case 'TOGGLE_TODOS_LIST':
      if (state._id === action._id){
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
    case 'PUT_TODOLIST_SUCCESS':
      return Object.assign({}, state, {
        todosList: [...state.todosList, todosList({}, action)]
      });
    case 'FETCH_TODOSLIST_SUCCESS':
      return { todosList: action.payload };
    break;
    case 'REMOVE_TODO_LIST':
      return Object.assign({}, state, {
        todosList: state.todosList.filter(tl => todosList(tl, action))
      });

    case 'TOGGLE_TODOS_LIST':
      return Object.assign({}, state, {
        todosList: state.todosList.map(tl => todosList(tl, action)),
      });
    case 'PUT_TODOS_SUCCESS':
    console.info('CASE 1 ok');
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
