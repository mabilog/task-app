import React, { Component } from 'react';
import Form from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: {
        text: '',
      }
    }
  }
  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App" >
        <Form />
      </div>
    );
  }
}

export default App;
