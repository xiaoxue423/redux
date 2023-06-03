import { INCREMENT, DECREMENT } from "./constant";

export const increment = (data) => ({ type: INCREMENT, data });

export const decrement = (data) => ({ type: DECREMENT, data });

// 异步action就是指action函数的返回值为函数,异步action中一般都会调用同步action。
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
        dispatch(increment(data));
    }, time);
  };
};
