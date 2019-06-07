import React from 'react';

class Todo extends React.Component {
    render() {
        return(
            <div>
                <div>{this.props.id}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Todo;
