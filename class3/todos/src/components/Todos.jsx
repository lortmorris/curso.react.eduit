import React from 'react';
import Todo from './todo.jsx';

const Todos = ({todos, title})=> (
  <ul>
    <li><strong>{title}</strong></li>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

export default Todos;
