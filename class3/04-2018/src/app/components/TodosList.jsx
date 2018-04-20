import React from 'react';
import Todos from './Todos.jsx';

const TodosList = ({ todoslist }) => {
  console.info('todoslist ', todoslist);
  return (
    <div>
      { todoslist.map(tl => (<Todos
        id={tl.id}
        title={tl.title}
        todos={tl.todos}
        key={tl.id} />)) }
    </div>
  );
}

export default TodosList;
