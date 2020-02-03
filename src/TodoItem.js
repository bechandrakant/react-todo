import React from 'react'

class TodoItem extends React.Component {

  completedStyle = {
      fontStyle: 'italic',
      color: '#cdcdcd',
      textDecoration: 'line-through'
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.todo.completed} onChange={() =>
          this.props.handleChange(this.props.todo.id)} />
        <p style={this.props.todo.completed ? this.completedStyle : null}>{this.props.todo.text}</p>
      </div>
    )
  }
}

export default TodoItem