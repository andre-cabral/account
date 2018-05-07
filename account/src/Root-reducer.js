import { combineReducers } from 'redux'
import ClientReducer from './Client/Client-reducer'
import ProductReducer from './Product/Product-reducer'

const rootReducer = combineReducers({
  client: ClientReducer,
  product: ProductReducer
})

export default rootReducer;