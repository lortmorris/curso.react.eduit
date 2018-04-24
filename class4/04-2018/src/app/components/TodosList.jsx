import React from 'react';
import Todos from './Todos.jsx';

const TodosList = ({ todoslist, dispatch }) => (
  <div>
    { todoslist.map(tl => (<Todos
      id={tl.id}
      title={tl.title}
      todos={tl.todos}
      dispatch={dispatch}
      key={tl.id} />)) }
    </div>
  );


  export default TodosList;
