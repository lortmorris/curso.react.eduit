import React from 'react';
import { removeTodo, toggleTodo } from '../actions';

const removeTask = (listId, id, dispatch) => () => dispatch(removeTodo(listId, id));
const toggleTask = (listId, id, dispatch) => () => dispatch(toggleTodo(listId, id));

const Item = ({ listId, title, id, completed, dispatch }) => (
  <li style={{color: `${completed ? 'blue' : 'red'}`}}>
    <span onClick={toggleTask(listId, id, dispatch)}>{title}</span>
    <button onClick={removeTask(listId, id, dispatch)}>X</button>
  </li>
);


export default Item;
