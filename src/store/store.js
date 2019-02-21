import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
const devToolsExtension = () => (window.devToolsExtension ? window.devToolsExtension() : f => f)

const configureStore = (history, initialState) => {

  return process.env.NODE_ENV === 'production' ?
    createStore(rootReducer, initialState, applyMiddleware(thunk, 
      routerMiddleware(history)))
    : createStore(rootReducer, initialState, applyMiddleware(thunk, 
      createLogger, 
      routerMiddleware(history)),
    devToolsExtension())
}

export default configureStore
