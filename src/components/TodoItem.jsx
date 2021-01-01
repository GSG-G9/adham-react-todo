import React from 'react';

class Item extends React.Component {
  state = {
    isChecked: false
  };
  checkItem = (e) => {
    console.log(e);
    // this.setState({isChecked: })
  }
  render(){
    return(
      <div>
          {this.props.value.map((element, index)=> {
          return(
            <div key={index}>
              <li >{element}</li>
              <button onClick={() => this.props.deleteItem(element)}>del</button>
              <button onClick={() => this.props.selectTask(element)}>edit</button>
              <input type="checkbox" onClick={() => this.checkItem(element)} />
            </div>
          )  
          })};
      </div>
    )  
  }
  
};

export default Item;