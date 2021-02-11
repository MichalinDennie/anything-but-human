import { combineReducers } from 'redux'
import { cartReducer } from './CartReducer'
import { Reducer } from './reducer'

export default combineReducers({
       Product: Reducer,
       CartReducer: cartReducer,
})