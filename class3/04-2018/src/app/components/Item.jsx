import React from 'react';

const Item = ({ title, id, completed }) => (
  <li style={{color: `${completed ? 'blue' : 'red'}`}}>
    {title}
    <button>X</button>
  </li>
);

export default Item;
