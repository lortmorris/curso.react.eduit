import React from 'react';
import RemoveTodosList from '../RemoveTodosList/index.jsx';

const TodoItem = ({ todo, listId, dispatch }) => (
  <li>
    <a href="">{todo.title} </a>
    <RemoveTodosList dispatch={dispatch} listId={listId} itemId={todo._id} />
  </li>
);

export default TodoItem;
