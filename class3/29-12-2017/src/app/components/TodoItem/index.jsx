import React from 'react';

const TodoItem = ({ name, completed, id, listId }) => (
  <li>
    <strong>{name}</strong>
  </li>
);

export default TodoItem;
