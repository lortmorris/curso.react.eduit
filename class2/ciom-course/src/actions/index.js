
export const addTodo = title => ({
  type: 'ADD_TODO',
  title,
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})
