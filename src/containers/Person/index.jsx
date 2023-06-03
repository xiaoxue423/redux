import React, { Component } from "react";

export default class index extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    console.log(name, age);
  };

  render() {
    return (
      <div>
        <h1>我是Person组件</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="请输入姓名"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="请输入年龄"
        />
        <button onClick={this.addPerson}>添加人</button>
        <ul>
            <li>名字1-年龄1</li>
            <li>名字1-年龄1</li>
            <li>名字1-年龄1</li>
        </ul>
      </div>
    );
  }
}
