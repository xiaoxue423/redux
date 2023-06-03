// applyMiddleware 执行中间件
import {createStore,applyMiddleware} from 'redux'

// 引入为Count组件服务的reducer
import count from './reducers/count'

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

export default createStore(count,applyMiddleware(thunk))