import React from 'react';
import Todo from './todo.jsx';
import AddTodo from './AddTodo/index.jsx';
import { addTodo } from '../actions';

const Todos = ({todos, title, store, listId})=> {
  const handlerSubmit = (title) => store.dispatch(addTodo(title, listId));

    return (
      <ul>
        <li><strong>{title}</strong></li>
        <AddTodo submit={handlerSubmit} />
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }


  export default Todos;
