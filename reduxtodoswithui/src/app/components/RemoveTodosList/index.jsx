import React from 'react';
import { removeTodoList, removeTodo } from '../../actions';

class RemoveTodosList extends React.Component {
  constructor(props){
    super(props);
    this.dispatch = props.dispatch;
    this.listId = props.listId;
    this.itemId = props.itemId;
    this.remove = this.remove.bind(this);
  }

  remove(e){
    e.preventDefault();
    this.dispatch(this.itemId === -1 ?
      removeTodoList(this.listId) : removeTodo(this.listId, this.itemId)
    );
  }
  render(){
    return (
      <button onClick={this.remove}>[X]</button>
    )
  }
}

export default RemoveTodosList;
