import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { addTodo, removeTodo, toggleTodo, addTodosList } from './actions';
import MyHeader from './components/MyHeader.jsx';
import TodosList from './components/TodosList.jsx';

const store = createStore(reducer);
window.store = store;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.completed,
      id: props.id,
      value: props.value,
      visible: true,
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  toggleTodo() {
    this.setState({
      completed: !this.state.completed,
    });
  }

  removeTodo(id) {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { value, completed, id } = this.state;
    if (!this.state.visible) return (<span />);
    return (
      <li
        >
        <span
          style={{color: `${completed ? 'blue' : 'red'}`, cursor: 'pointer'}}
          onClick={this.toggleTodo}
          >
          {value}
        </span>
        <span onClick={this.removeTodo}>[X]</span>
      </li>
    );
  }
}


class AppTest extends React.Component {
  constructor(props) {
    super(props);
    const todos = [];
    for (let x = 1; x <= 100000; x++) {
      todos.push({
        id: x,
        value: `task ${x}`,
        completed: x % 2 === 0,
      });
    }
    this.state = {
      todos,
    };
  }

  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <ul>
          {this.state.todos.map(t => (
            <Item
              key={t.id}
              value={t.value}
              completed={t.completed}
              />
          ))}

        </ul>
      </div>
    )
  }
}


const App = ({ state }) => (
<div>
 <MyHeader dispatch={store.dispatch} />
 <TodosList todoslist={state.todoslist} dispatch={store.dispatch} />
</div>
);



const appRender = () => render(<App state={store.getState()} />, document.getElementById('app'));

// store.subscribe(appRender);

store.dispatch(addTodosList('lista de tareas 1'));

// for (let x = 1; x <= 1000; x++ ) {
//   store.dispatch(addTodo(0, `task ${x}`));
//   if (x % 2 === 0) store.dispatch(toggleTodo(0, x));
// }

appRender();
