import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer, userReducer } from './reducers/index'


const reducer = combineReducers({
  userState: userReducer,
  productsState: productsReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))