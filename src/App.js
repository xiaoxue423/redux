import Count from "./containers/Count"; //引入容器组件
import Person from './containers/Person'

function App() {
  return (
    <div>
      {/* 渲染容器组件 给容器组件传递store */}
      <Count />
      <hr/>
      <Person/>
    </div>
  );
}

export default App;
