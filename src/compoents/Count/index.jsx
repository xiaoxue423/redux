import React, { Component } from "react";

export default class index extends Component {
  add = () => {
    this.props.increment(1)
  };
  decrement = () => {
    this.props.decrement(2)
  };
  addAsync = ()=>{
    this.props.incrementAsync(3,2000)
  }
  render() {
    return (
      <div>
        <h1>我是Count组件</h1>
        <h1>和为{this.props.count}</h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.decrement}>-2</button>
        <button onClick={this.addAsync}>异步+3</button>
      </div>
    );
  }
}
