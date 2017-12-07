import React from 'react';
import { RemoveItem, ToggleItem } from '../../actions';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemHandler = this.removeItemHandler.bind(this);
    this.toggleItemHandler = this.toggleItemHandler.bind(this);
  }

  toggleItemHandler () {
    this.props.dispatch(ToggleItem(this.props.listId, this.props.id));
  }
  removeItemHandler() {
    this.props.dispatch(RemoveItem(this.props.listId, this.props.id));
  }
  render() {
    const { name, completed, id, listId } = this.props;
    return (
      <li className={`list-group-item ${completed ? 'list-group-item-success':''}`} onClick={this.toggleItemHandler}>
        <strong>{name}</strong> <button onClick={this.removeItemHandler}>[X]</button>
      </li>
    );
  }
}


export default TodoItem;
