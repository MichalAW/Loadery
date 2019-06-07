import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: uuid.v4(),
                    text: "123"
                },
                {
                    id: uuid.v4(),
                    text: "123"
                },
                {
                    id: uuid.v4(),
                    text: "123"
                }
            ]
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };

        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    render() {
        return (
            <div>
                <Title name="My Title" todoListCount={this.state.data.length}/>
                <div className={style.TodoApp}>
                    <TodoList data={this.state.data}></TodoList>
                </div>
            </div>
        );
    }
}

export default App;