import React from 'react';
import { render } from 'react-dom';
import SubTitle from './components/SubTitle.jsx';

class Title extends React.Component{
    render(){        
        return (
            <h1 style={{ color: this.props.color }}>{this.props.title}</h1>
        )
    }
}


class Todos extends React.Component{
    render(){
        return (
            <ul className="todos-box">
                <li>Aprender React</li>
            </ul>
        )
    }
}

class BlockTodos extends React.Component{
    render(){
        return (
            <div>
            <SubTitle />
            <Todos />
            </div>
        )
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
                <Title title="hola a todos los pibes" color="red" />
                <BlockTodos />
                <BlockTodos />
            </div>
        );
    }
}

const appRender = ()=> render( <App />, document.getElementById('app') );

appRender();
