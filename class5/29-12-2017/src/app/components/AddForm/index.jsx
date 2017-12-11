import React from 'react';

import ApiClient from '../../api/client.js'
import { AddNewTodosList, AddItem } from '../../actions';



class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.changeValue = this.changeValue.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  changeValue(evt) {
    this.setState({ value: evt.target.value });
  }

  onSubmitHandler(evt) {
    evt.preventDefault();

    if (this.props.listId) {
    this.props.dispatch( AddItem(this.props.listId, this.state.value) );
      ApiClient({
        method: 'put',
        url: 'http://localhost:5000/addtodoitem',
        params: AddItem(this.props.listId, this.state.value),
      });
    }else{
      this.props.dispatch( AddNewTodosList(this.state.value) );
      ApiClient({
        method: 'put',
        url: 'http://localhost:5000/addtodolist',
        params: AddNewTodosList(this.state.value),
      });
    }

    this.setState({ value: '' });
  }

  render() {
    const { title, dispatch } = this.props;
    return (
      <div className={'form-group'}>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor={'example-text-input'} className={'col-2 col-form-label'}>{title}</label>
            <div className={'col-10'}>
              <input
                className={'form-control'}
                type={'text'}
                value={this.state.value}
                id={'example-text-input'}
                onChange={this.changeValue}
                />
            </div>
          <input type={'submit'} value={'Add+ '} className={'btn btn-primary'} />
        </form>
      </div>
    );
  }
}


export default AddForm;
