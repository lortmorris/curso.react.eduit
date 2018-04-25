import React from 'react';
import Item from './Item.jsx';
import AddNewTask from './AddNewTask.jsx';
import { removeTodoList } from '../actions';

class Todos extends React.Component {

  constructor(props){
    super(props);
    this.removeTodoList = this.removeTodoList.bind(this);
  }

   removeTodoList(event) {
     this.props.dispatch(removeTodoList(this.props.id));
   }

  render() {
    const { title, completed, id, todos, dispatch} = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <button onClick={this.removeTodoList}>[X]</button>
        <AddNewTask dispatch={dispatch} id={id} />
        <ul>
          {todos.map(t => <Item
            title={t.title}
            id={t.id}
            listId={id}
            completed={t.completed}
            key={t.id}
            dispatch={this.props.dispatch}
            />)}
          </ul>
        </div>
      );
    }
  }

  export default Todos;
