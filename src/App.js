import React from 'react';
import todosData from './todosData'
import TodoItem from './TodoItem'
import FormContainer from './FormContainer';

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
          const newTodo = {
            ...todo,
            completed: !todo.completed
          }
          console.log(todo)
          console.log(newTodo)
          return newTodo
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
      <>
        <div className='todo-list'>
          {todos}
        </div>
        <FormContainer />
      </>
      ) 
  }
}

export default App;
