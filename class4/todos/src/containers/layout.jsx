import React from 'react';
import Title from '../components/Title.jsx';
import Todos from '../components/Todos.jsx';
import AddTodoList from '../components/AddTodoList/index.jsx';

const Layout = ({store, title})=>(
  <div>
    <Title value={title} />
    <AddTodoList />
    {store.getState().map(todos => (
      <Todos key={todos.todosId} {...todos} />
    ))}

  </div>
);

export default Layout;
