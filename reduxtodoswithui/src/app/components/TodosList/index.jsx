import React from 'react';
import TodoItem from '../TodoItem/index.jsx';
import FormAddNewEntity from '../FormAddNewEntity/index.jsx';
import RemoveTodosList from '../RemoveTodosList/index.jsx';

const TodosList = ({ list, dispatch })=> {
  return (
  <div>
    <h2>{list.name}</h2>
    <label > {'All'}
      <input type="checkbox"  />
    </label>
    <FormAddNewEntity dispatch={dispatch} listId={list._id} />
    <ul>
      {list.todos.map(todo => <TodoItem key={`todo-${todo.id}`} listId={list._id} dispatch={dispatch} todo={todo}/> )}
    </ul>
    <RemoveTodosList dispatch={dispatch} listId={list.id} itemId={-1} />
  </div>
);
}
export default TodosList;
