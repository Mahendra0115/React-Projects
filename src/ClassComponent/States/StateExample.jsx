import React, { Component } from "react";

export default class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      num: 1
    };
  }

  decrement() {
    if (this.state.num > 1) {
      this.setState({ num: this.state.num - 1 });
    }
  }

  increment() {
    this.setState({ num: this.state.num + 1 });
  }

  render() {
    return (
      <div>
        <h1>This is a Class Component</h1>
        <h2>State Example</h2>
        <h2>{this.state.num}</h2>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
