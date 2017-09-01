import React from 'react';
import { fetch } from '../../actions/api';

import TodosList from '../../components/TodosList/index.jsx';

class TodosLists extends React.Component {
  constructor(props){
    super(props);
    fetch(props.dispatch)('todoslist');
    console.log('soy constructor');
  }

  render(){
    const { dispatch, state} = this.props;
    return (
    <div>
      { state.map(list => (<TodosList key={`list-${list._id}`} list={list} dispatch={dispatch} />)) }
    </div>
    );
  }
}



export default TodosLists;
