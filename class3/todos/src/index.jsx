import React from 'react';
import {render} from 'react-dom';

const App = ()=>(
  <div>
    <h1>TODO App</h1>
    <input type="text" placeholder="TODOS Name" />
    <div>
      <strong>Todos 1</strong>
      <input type="text" placeholder="Todo title" />
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
      </ul>
    </div>
  </div>
)
const appRender = ()=>render(<App />,
  document.getElementById('app')
);

appRender();
