/* TODOS_LIST Actions */
export const AddNewTodosList = name => ({
  type: 'ADD_NEW_TODOS_LIST',
  name,
});

export const RemoveTodosList = listId => ({
  type: 'REMOVE_TODOS_LIST',
  listId,
});

export const ToggleTodosList = listId => ({
  type: 'TOGGLE_TODOS_LIST',
  listId,
});

export const EditTodoListName = (listId, name) => ({
  type: 'EDIT_TODOS_LIST_NAME',
  listId,
  name,
});


/* ITEMS Actions */

export const AddItem = (listId, name) => ({
  type: 'ADD_ITEM',
  listId,
  name,
});

export const ToggleItem = (listId, itemId) => ({
  type: 'TOGGLE_ITEM',
  listId,
  itemId,
});

export const RemoveItem = (listId, itemId) => ({
  type: 'REMOVE_ITEM',
  listId,
  itemId,
});

export const  EditItemName = (listId, itemId, name) => ({
  type: 'EDIT_ITEM_NAME',
  listId,
  itemId,
  name,
});


export default null;
