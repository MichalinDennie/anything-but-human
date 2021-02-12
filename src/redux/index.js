// import Reducer from './Reducer/reducer'
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
// import { data } from './Reducer/data'
import { productListReducer } from "./Reducer/reducer";


const initialState = {};
const reducer = combineReducers({
       productList: productListReducer,
})

const ComposeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const ComposeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, ComposeEnhencer(applyMiddleware(thunk)));

export default store;