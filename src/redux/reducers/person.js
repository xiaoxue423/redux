import { ADD_PERSON } from "../../redux/constant";

// 初始化人的列表
const initState = [{ id: "001", name: "tom", age: 25 }];

export default function person(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
