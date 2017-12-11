import React from 'react';
import TodoItem from '../TodoItem/index.jsx';
import AddForm from '../AddForm/index.jsx';

const TodosList = ({ name, todos, completed, listId, dispatch }) => (
  <div style={{width: '350px', float: 'left', height: '400px'}}>
    <h2 style={{color: `${completed ? 'blue' : 'red'}`}}>{name}</h2>
    <AddForm title={'Add Item'} dispatch={dispatch} listId={listId} />
    <ul className={'list-group'}>
      {todos.map(t => (
        <TodoItem
          key={`t-${window.getNextId()}`}
          name={t.name}
          completed={t.completed}
          id={t.id}
          listId={t.listId}
          dispatch={dispatch}
        />
      ))}
    </ul>
    <div>
      <input className={'form-control'} type="checkbox" checked={`${completed ? 'checked' : ''}`} onChange={() => {}}/>
    </div>
  </div>
);

export default TodosList;
