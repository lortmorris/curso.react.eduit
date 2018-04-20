import React from 'react';

class Title extends React.Component {
  constructor(props) {
    console.info('im constructor: ', props);
    super(props);
  }

  componentWillMount() {
    console.info('vamos a montar el component');
  }

  render() {
    console.info('render: ');
    return (
      <h1 style={{color: this.props.color}}>{this.props.title}</h1>
    )
  }

  componentDidMount() {
    console.info('ya se montó');
  }
}

export default Title;
