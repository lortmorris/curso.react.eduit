import React from 'react';

const Todo = ({title, completed, owner, asigne, time, id})=>(
  <li>{id} : {title}</li>
);

export default Todo;
