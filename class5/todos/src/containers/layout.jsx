import React from 'react';
import Title from '../components/Title.jsx';
import Todos from '../components/Todos.jsx';
import AddTodoList from '../components/AddTodo/index.jsx';
import { addTodoList } from '../actions';

const Layout = ({store, title})=>{

  const handlerSubmit = (title) => store.dispatch(addTodoList(title));
  return (
    <div>
      <Title value={title} />
      <AddTodoList submit={handlerSubmit} />
      {store.getState().map(todos => (
        <Todos key={todos.todosId} {...todos} listId={todos.todosId}  store={store}/>
      ))}

    </div>
  );
}

export default Layout;
