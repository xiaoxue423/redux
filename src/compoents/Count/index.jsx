import React, { Component } from "react";
import store from "../../redux/store";
import {increment,decrement} from '../../redux/count_action'

export default class index extends Component {
  add = () => {
    store.dispatch(increment(1));
  };
  decrement = () => {
    store.dispatch(decrement(1));
  };
  render() {
    return (
      <div>
        <h1>我是Count组件</h1>
        <h1>和为{store.getState()}</h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}
