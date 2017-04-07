import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
//import { todo } from './reducers/index.jsx';

class Title extends React.Component {
    render(){
        console.log(this, this.props.value);
        return (
            <h1>{this.props.value}</h1>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Title value="hola a todos" />
        );
    }
}

const appRender = ()=>render(<App />,
document.getElementById('app')
);

appRender();
