import React, { Component } from 'react';

export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: null
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("123")
  };
  render() {
    const { fullName } = this.state
    return (
      <div>
        <h1>What is your name?</h1>
        <p>Full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="fullName"></input>
          <button type="submit">Submit</button>
        </form>
      </div >
    );
  }
}