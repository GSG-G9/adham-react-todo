import React from 'react';
import './App.css';
import AddList from './components/AddList';
import TodoList from './components/TodoList';
class App extends React.Component {
  state = {
    value: []
   };
 
  deleteItem = (title) => {
    const selectItem =  this.state.value.filter(element => element !== title);
    this.setState({ value : selectItem});
  };

  inputTextHandler = (newTask) => {
    this.setState((oldState)=> {
      return {value: [...oldState.value, newTask]}
    });
  };

  selectTask = (specificTask) => {
    const selectItem =  this.state.value.filter(element => element === specificTask); 
    console.log(selectItem);
    return selectItem;
  };

  render(){
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddList inputTextHandler={this.inputTextHandler}/>
        <TodoList value={this.state.value} deleteItem={this.deleteItem} selectTask={this.selectTask}/>
      </div>
    );
  }
  
}

export default App;
