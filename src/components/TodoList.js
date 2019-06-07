import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return(
            <div>
                {this.props.data.map((todo, index) => {
                    return(
                        <Todo key={index} text={todo.text} id={todo.id}/>
                    )
                })}
            </div>
        )
    }
}

export default TodoList;