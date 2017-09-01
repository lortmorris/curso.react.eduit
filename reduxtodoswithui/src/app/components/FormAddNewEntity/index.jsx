import React from 'react';
import { createTodoList, addTodo } from '../../actions';
import { put } from '../../actions/api';

class FormAddNewEntity extends React.Component {
  constructor(props){
    super(props);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.dispatch = props.dispatch;
    this.listId = props.listId;
    this.state = {
      name: '',
    };
  }

  change(e){
    this.setState({
      name: e.target.value
    });
  }

  submit(e){
    e.preventDefault();
    if (this.state.name.trim() === '') return;

    if (this.listId === -1){
    //  this.dispatch(createTodoList(this.state.name));
      put(this.dispatch)('todoslist', {
        name: this.state.name,
        todos: [],
        completed: false,
      });
    }else{
      this.dispatch(addTodo(this.listId, this.state.name));
      put(this.dispatch)('todo', { listId: this.listId });
    }

    this.setState({ name: '' });
  }
  render(){
    return (
    <form onSubmit={this.submit}>
      <input type="text" onChange={this.change} value={this.state.name}/>
      <input type="submit" value="+Add" />
    </form>
    )
  }
}

export default FormAddNewEntity;
