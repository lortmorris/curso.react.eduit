import React from 'react';

class RemoveElement extends React.Component{
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(event){
    event.preventDefault();
    this.props.action();
  }

  render(){
    return (
      <a href="" onClick={this.handlerClick}>remove</a>
    )
  }
}

export default RemoveElement;
