import React from 'react';
import Item from './TodoItem';

const TodoList = (props) => {
  
    return(
      <div className="list-container">
        <Item value={props.value} deleteItem={props.deleteItem} selectTask={props.selectTask}/>
      </div>
    )
  
  
};

export default TodoList;