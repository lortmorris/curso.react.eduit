import React from 'react';

const TodoItem = ({ name, completed, id, listId }) => (
  <li className={`list-group-item ${completed ? 'list-group-item-success':''}`}>
    <strong>{name}</strong>
  </li>
);

export default TodoItem;
