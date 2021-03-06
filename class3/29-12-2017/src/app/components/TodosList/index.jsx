import React from 'react';
import TodoItem from '../TodoItem/index.jsx';
import AddForm from '../AddForm/index.jsx';

const TodosList = ({ name, todos, completed, listId }) => (
  <div>
    <h2 style={{color: `${completed ? 'blue' : 'red'}`}}>{name}</h2>
    <AddForm title={'Add Item'}/>
    <ul>
      {todos.map(t => (
        <TodoItem
          key={`t-${window.getNextId()}`}
          name={t.name}
          completed={t.completed}
          id={t.id}
          listId={t.listId}
        />
      ))}
    </ul>
    <div>
      <input type="checkbox" checked={`${completed ? 'checked' : ''}`} onChange={() => {}}/>
    </div>
  </div>
);

export default TodosList;
