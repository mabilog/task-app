import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: { text: '' },
      tasks: [],
    }
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.push(this.input.value),
      task: {
        text: '',
      }
    })
    console.log(this.input.value);
    console.log(this.state.tasks)

  }
  render() {
    // const { task, tasks } = this.state
    return (
      <div>
        <label>Add Task</label>
        {/* <p>Task list: {tasks}</p>
        <p>Task: {task}</p> */}
        <form onSubmit={this.handleInputChange}>
          <input type="text" placeholder="Task" task="task" id="taskInput" ref={element => { this.input = element }}></input>
          <button type="submit">Add task</button>
        </form>

      </div >
    );
  }
}