
import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import {default as Request} from './lib/request.jsx';

const APIHost = 'http://localhost:8000';
const request = new Request();
let todoStore = null;
let id =0 ;


function todo(state={}, action){
  switch (action.type) {
    case 'ADD_TODO':
    let obj= {
      title: action.title,
      complete: false,
      id: action.id,
      error: false
    };

    request.put(APIHost+'/todo', obj)
    .catch(err=>{

    })
    return obj;
    break;

    case 'ERROR_TODO':
    if(state.id !== action.id) return state;
    else return Object.assign({},
      state,
      {error: !state.error}
    );

    break;
    case 'TOGGLE_TODO':
    if(state.id !== action.id) return state;
    else {
      let nobj =  Object.assign({},
        state,
        {complete: !state.complete}
      );
      request.patch(APIHost+'/todo', nobj);
      return nobj;
    }

    default:

  }
}

function todosFactory(initialState=[]){
  return function todos(state=initialState, action){
    switch (action.type) {
      case 'ADD_TODO':
      return [...state, todo(null, action)];
      break;
      case 'REMOVE_TODO':
      return [state.slice(0, action.index).concat(index+1)];
      break;
      case 'TOGGLE_TODO':
      return state.map( t=> todo(t, action));
      break;
      default:
      return state;
    }
  }

}


class FormTodo extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeField = this.changeField.bind(this);
    this.state = {
      title: ''
    };
  }

  changeField(evt){
    let own = {};
    own[evt.target.id] = evt.target.value;
    this.setState(own);
  }

  handleSubmit(evt){
    evt.preventDefault();
    if(this.state.title.trim()==='') return;
    todoStore.dispatch({type: 'ADD_TODO', title: this.state.title});
    this.setState({title:''});
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title: <input type="text" id='title' value={this.state.title} onChange={this.changeField} />
      </label>
      <input type="submit" value="Add" />
    </form>
  )
}


}


class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(){
    todoStore.dispatch({type:'TOGGLE_TODO', id: this.props.todo.id});
  }

  render(){
    const itemStyle = {
      color: this.props.todo.complete === true ? '#000000' : '#ff0000'
    };

    return (
      <li onClick={this.toggleItem} style={itemStyle } >
        {this.props.todo.title}
      </li>
    );
  }
}

class TodosList extends React.Component{

  render(){
    let list = '';
    return (
      <ul>
        {this.props.todos.map((t)=>{
          return <TodoItem key={t.id} todo={t} />
        })}
      </ul>
    );
  }
}


function Title(props){
  return (
    <h1>{props.value}</h1>
  )
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Title value="relojes magicos"/>
        <FormTodo />
        <TodosList todos={this.props.todos} />
      </div>
    );
  }
}


request.get(APIHost+'/todo')
.then(data=>{
  todoStore = createStore(todosFactory(data.todos));
  id = data.todos.length;
  const appRender = ()=>render(<App todos={todoStore.getState()}/>,
  document.getElementById('app')
  );

  todoStore.subscribe(()=> appRender())
  appRender();
});
