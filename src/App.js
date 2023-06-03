import Count from "./containers/Count"; //引入容器组件
import store from "./redux/store";

function App() {
  return (
    <div>
      {/* 渲染容器组件 给容器组件传递store */}
      <Count store={store} />
    </div>
  );
}

export default App;
