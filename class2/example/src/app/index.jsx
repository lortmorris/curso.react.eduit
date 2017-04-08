import React from 'react';
import { render } from 'react-dom';
import SubTitle from './components/SubTitle.jsx';



const Title = ({color, title})=> (
    <h1 style={{ color: color }}>{title}</h1>
)


class Todos extends React.Component{
    render(){
        console.log(this.props);
        return (
            <ul className="todos-box">
                {this.props.todos.map(todo=>(
                    <li>{todo.title}</li>
                ))}
            </ul>
        )
    }
}

class BlockTodos extends React.Component{
    render(){
        return (
            <div>
            <SubTitle subtitle={this.props.title}  />
            <Todos todos={this.props.todos} />
            </div>
        )
    }
}



const todos1 = [{title: 'Aprender React'}];
const todos2 = [{title: 'Aprender Redux'}];

class App extends React.Component {
    render() {
        return (
            <div>
                <Title title="hola a todos los pibes" color="red" />
                <BlockTodos title="Todos 1" todos={todos1} />
                <BlockTodos title="Todos 2" todos={todos2} />
            </div>
        );
    }
}

const appRender = ()=> render( <App />, document.getElementById('app') );

appRender();
