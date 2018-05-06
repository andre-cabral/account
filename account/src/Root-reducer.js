import { combineReducers } from 'redux'
import ClientReducer from './Client/Client-reducer'

const rootReducer = combineReducers({
  client: ClientReducer
})

export default rootReducer;