import React from 'react';
import Item from './Item.jsx';
import AddNewTask from './AddNewTask.jsx';

const Todos = ({ title, completed, id, todos}) => (
  <div>
      <h2>{title}</h2>
      <button>[X]</button>
      <AddNewTask />
      <ul>
        {todos.map(t => <Item
          title={t.title}
          id={t.id}
          completed={t.completed}
          key={t.id}
          />)}
      </ul>
  </div>
);
export default Todos;
