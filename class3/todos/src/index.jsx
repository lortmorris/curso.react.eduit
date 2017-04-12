import React from 'react';
import {render} from 'react-dom';

const App = ()=>(
  <div>
    <h1>TODO App</h1>
  </div>
)
const appRender = ()=>render(<App />,
  document.getElementById('app')
);

appRender();
