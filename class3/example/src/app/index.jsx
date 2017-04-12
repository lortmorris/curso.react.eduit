import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { multipleTodos } from './reducers/index.jsx';

const Title = ({value}) => (
  <h1>{value}</h1>
);


class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      todo: props.todo
    };
  }

  render(){
    return (
      <li>{this.state.todo.title}</li>
    )
  }

  alter(){
    this.setState(Object.assing({},
      this.state.todo,
      {state: !this.state.todo.status}));
    }
  }


  class Todos extends React.Component{
    constructor(props){
      super(props);
      this.state = { todos: props.todos};
    }

    render(){
      const items = this.state.todos.map( t =>(
        <TodoItem key={t.id} todo={t} />
      ));

      return (
        <div>
          <span>List de tareas</span>
          <ul>
            {items}
          </ul>
        </div>
      );
    }
  }

  class App extends React.Component {
    render() {
      return (
        <div>
          <Title value="hola a todos" />
          {this.props.list.map(todos=> (
            <Todos todos={todos.getState()} />
          ))}

        </div>
      );
    }
  }

const appRender = ()=>render(<App list={multipleTodos.getState()} />,
document.getElementById('app')
);

multipleTodos.subscribe(()=> {
  appRender();
});

multipleTodos.dispatch({type:'ADD_LIST'});
multipleTodos.dispatch({type:'ADD_LIST'});
multipleTodos.dispatch({type:'ADD_LIST'});
