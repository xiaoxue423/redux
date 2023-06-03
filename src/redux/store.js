// applyMiddleware 执行中间件
import {createStore,applyMiddleware} from 'redux'

import count from './count_reducer'

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

export default createStore(count,applyMiddleware(thunk))