import React from "react";
import './App.css'
// import Header from "./Components/Header"
// import MainContent from './Components/MainContent'
// import Footer from './Components/Footer'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {  // Remove parentheses here
  constructor(){
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    // console.log("Changed", id);
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){  // Use strict equality (===)
          return { // Return a new object to ensure immutability
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render(){
    const todoItems = this.state.todos.map(item => (
      <TodoItem 
        key={item.id} 
        item={item} 
        handleChange={this.handleChange}
      /> 
    ));
    
    return (
      <div className='todo-list'>
        {/* <Header />
        <MainContent />
        <Footer /> */}
        {todoItems}
      </div>
    );
  }
}

export default App;
