import { combineReducers } from 'redux';
import fetchProductReducer from './fetchProduct';
import fetchProductsReducer from './fetchProducts';
import placeOrderReducer from './placeOrder';

const rootReducer = combineReducers({
   fetchProduct: fetchProductReducer,
   placeOrder: placeOrderReducer,
   fetchProducts: fetchProductsReducer,
})

export default rootReducer;