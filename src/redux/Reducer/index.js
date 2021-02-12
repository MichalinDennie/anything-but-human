import { combineReducers } from 'redux'
import { cartReducer } from './CartReducer'
import Reducer from './reducer'

export default combineReducers({
       reducer: Reducer,
       CartReducer: cartReducer,
})