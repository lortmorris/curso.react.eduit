import React from 'react';
import { removeTodo } from '../actions';

const removeTask = (listId, id, dispatch) => () => dispatch(removeTodo(listId, id));

const Item = ({ listId, title, id, completed, dispatch }) => (
  <li style={{color: `${completed ? 'blue' : 'red'}`}}>
    {title}
    <button onClick={removeTask(listId, id, dispatch)}>X</button>
  </li>
);


export default Item;
