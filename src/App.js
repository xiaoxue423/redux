import Count from "./containers/Count"; //引入容器组件

function App() {
  return (
    <div>
      {/* 渲染容器组件 给容器组件传递store */}
      <Count />
    </div>
  );
}

export default App;
