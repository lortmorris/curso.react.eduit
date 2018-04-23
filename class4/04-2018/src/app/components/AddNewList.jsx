import React from 'react';
import { addTodosList } from '../actions';

class AddNewList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addTodosList(this.state.title));
    this.setState({ title: '' });
  }

  handlerChange (event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <input type="text" placeholder="New Task name..." value={this.state.title} onChange={this.handlerChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default AddNewList;
