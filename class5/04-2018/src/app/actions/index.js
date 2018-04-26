
export const addTodo = (listId, title) => ({
  type: 'ADD_TODO',
  title,
  listId,
});

export const removeTodo = (listId, id) => ({
  type: 'REMOVE_TODO',
  id,
  listId,
});

export const toggleTodo = (listId, id) => ({
  type: 'TOGGLE_TODO',
  id,
  listId,
});

export const removeTodoList = listId => ({
  type: 'REMOVE_TODO_LIST',
  listId,
});

export const addTodosList = title => ({
  type: 'ADD_TODO_LIST',
  title,
});

export const setInitialState = state => ({
  type: 'SET_INITIAL_STATE',
  state,
});
