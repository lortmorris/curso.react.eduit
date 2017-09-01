export const createTodoList = name => ({
  type: 'CREATE_TODO_LIST',
  name,
  added: new Date(),
});

export const removeTodoList = id => ({
  type: 'REMOVE_TODO_LIST',
  id,
});

export const addTodo = (listId, title) => ({
  type: 'ADD_TODO',
  title,
  added: new Date(),
  listId,
});

export const removeTodo = (listId, id) => ({
  type: 'REMOVE_TODO',
  listId,
  id
});

export const toggleTodo = (listId, id) => ({
  type: 'TOGGLE_TODO',
  listId,
  id,
});

export const toggleList = listId => ({
  type: 'TOGGLE_TODOS_LIST',
  id: listId,
});
