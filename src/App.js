import React from 'react';
import todosData from './todosData'
import TodoItem from './TodoItem';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          const x = {
            ...todo,
            completed: !todo.completed
          }
          console.log(x)
          return x
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  
  render() {
    const todos = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>)
    return (
      <div className='todo-list'>
        {todos}
      </div>
      ) 
  }
}

export default App;
