import React from 'react';
import { addTodo } from '../actions';

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.dispatch(addTodo(this.props.id, this.state.title));
    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="New Task Title..."
            value={this.state.title}
            onChange={this.changeHandler}/>
        </form>
      </div>
    );
  }

};

export default AddNewTask;
