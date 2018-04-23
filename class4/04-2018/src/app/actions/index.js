
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

export const addTodosList = title => ({
  type: 'ADD_TODO_LIST',
  title,
});
