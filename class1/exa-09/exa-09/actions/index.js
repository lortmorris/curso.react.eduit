const AddTodosLists = title =>({
  type: 'ADD_NEW_TODOSLISTS',
  title,
});

const RemoveTodosLists = id =>({
  type: 'REMOVE_TODOSLISTS',
  id,
});

const AddTodo = (listId, title) => ({
  type: 'ADD_TODO',
  listId,
  title,
});

const RemoveTodo = (listId, id) => ({
  type: 'REMOVE_TODO',
  listId,
  id,
});

const ChangeTitle = (listId, title) => ({
  type: 'CHANGE_TODOSLISTS_TITLE',
  listId,
  title,
});

const ToggleTodo = (listId, id) => ({
  type: 'TOGGLE_TODO',
  listId,
  id,
});

const ToggleTodosLists = listId => ({
  type: 'TOGGLE_TODO',
  listId,
});



module.exports = {
  AddTodosLists,
  RemoveTodosLists,
  AddTodo,
  ChangeTitle,
  RemoveTodo,
  ToggleTodo,
  ToggleTodosLists,
};
