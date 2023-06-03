import { INCREMENT, DECREMENT } from "../constant";

const initState  = 10

export default function countReducer(preState=initState,action){
  // 从action对象中获取type,data
  const {type,data} = action;
  
  console.log('preState',preState)
  
  //根据type决定如何加工数据
  switch(type){
    case INCREMENT://如果是加
      return preState + data
    case DECREMENT://如果是减
      return preState - data
    default:
      return preState;
  }
}