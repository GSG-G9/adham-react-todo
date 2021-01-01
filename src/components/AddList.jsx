import React from 'react';

class AddList extends React.Component {
  state = {
    taskName : ''
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.setState({
            taskName: ""
          })
          this.props.inputTextHandler(this.state.taskName)
        }}>
          <input type="text" className="lsit-input" onChange={(e) => this.setState({taskName: e.target.value})}  value={this.state.taskName}/>
          <button className="list-button" type="submit">Add</button>
          <div className="select">
            <select name="todo" className="filter-list">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    )
  }
 
};

export default AddList;