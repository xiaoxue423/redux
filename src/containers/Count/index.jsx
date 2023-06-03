import React, { Component } from "react";
//引入redux
import { increment, decrement, incrementAsync } from "../../redux/actions/count";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";
//1、mapStateToProps函数返回的是一个对象；
//2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//3、mapStateToProps用于传递状态

//1、mapDispatchToProps函数返回的是一个对象
//2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//3、mapDispatchToProps用于传递操作状态的方法

class CountUI extends Component {
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

const CountContainer = connect(
  (state) => ({ count: state }),
  //   (dispatch) => ({
  //     increment: (number) =>
  //       //通知redux执行加法
  //       dispatch(increment(number)),
  //     decrement: (number) =>
  //       //通知redux执行减法
  //       dispatch(decrement(number)),
  //     incrementAsync: (number, time) => dispatch(incrementAsync(number, time)),
  //   })

    //mapDispatchToProps简写
  {
    increment,
    decrement,
    incrementAsync,
  }
)(CountUI); // connect()调用的返回值依然是一个函数
// connect()()会返回一个容器组件

//使用connect()()创建并暴露一个Count的容器组件
export default CountContainer;
