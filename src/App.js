import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: {
        text: '',
        id: uniqid()
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      task: { text: e.target.value }
    })
    console.log(e.target.value);
  }
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    })

  }
  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App" >
        <label htmlFor="taskInput">Add Task</label>
        <form onSubmit={this.onSubmitTask}>
          <input
            type="text"
            placeholder="Task"
            value={task.text}
            id="taskInput"
            onChange={this.handleChange} />
          <button
            type="submit">
            Add task
            </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
