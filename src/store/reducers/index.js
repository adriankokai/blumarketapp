import { combineReducers } from 'redux';
import fetchProductReducer from './fetchProduct';
import placeOrderReducer from './placeOrder';

const rootReducer = combineReducers({
   fetchProduct: fetchProductReducer,
   placeOrder: placeOrderReducer,
})

export default rootReducer;