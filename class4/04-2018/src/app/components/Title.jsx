import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <h1 style={{color: this.props.color}}>{this.props.title}</h1>
    )
  }

  componentDidMount() {

  }
}

export default Title;
